import express from "express";
const app = express();
const PORT = 3000;

function requestDriver(driverName, responseTimeMs, willAccept = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willAccept) {
        resolve({
          driver: driverName,
          status: "accepted",
          eta: `${Math.floor(responseTimeMs / 1000) + 2} mins`,
          responseTime: `${responseTimeMs}ms`,
        });
      } else {
        reject(new Error(`${driverName} declined the order`));
      }
    }, responseTimeMs);
  });
}
 
// ─────────────────────────────────────────────
// Route: GET /order/:orderId/assign
// Sends request to all 3 drivers simultaneously
// First to respond gets assigned — Promise.race
// ─────────────────────────────────────────────
 
app.get("/order/:orderId/assign", (req, res) => {
  const { orderId } = req.params;
 
  console.log(`\nOrder #${orderId} — contacting all drivers simultaneously...`);
 
  // Simulate 3 drivers with different response times
  // Change these ms values to control who "wins"
  const driver1 = requestDriver("Ali (Driver 1)", 3000); // slowest
  const driver2 = requestDriver("Sara (Driver 2)", 12000); // fastest — wins
  const driver3 = requestDriver("Usman (Driver 3)", 2000); // mid
 
  // Promise.race — resolves with whichever driver responds first
  // If the fastest driver declines, race still settles with that rejection
  Promise.race([driver1, driver2, driver3])
    .then((assignedDriver) => {
      res.json({
        success: true,
        message: `Order #${orderId} assigned to ${assignedDriver.driver}`,
        assignedDriver,
      });
    })
    .catch((error) => {
      // Only fires if the FASTEST driver declined (not just any driver)
      res.status(500).json({
        success: false,
        message: "First responding driver declined the order",
        error: error.message,
      });
    });
});
 
// ─────────────────────────────────────────────
// Route: GET /order/:orderId/assign-safe
// Uses Promise.any — skips declined drivers
// Assigns to first driver who ACCEPTS (not just first to respond)
// ─────────────────────────────────────────────
 
app.get("/order/:orderId/assign-safe", (req, res) => {
  const { orderId } = req.params;
 
  console.log(`\nOrder #${orderId} — finding first available driver...`);
 
  // Driver 1 is fastest but declines — Promise.any will skip it
  const driver1 = requestDriver("Ali (Driver 1)", 800, false); // fast but declines
  const driver2 = requestDriver("Sara (Driver 2)", 1500, true); // accepts
  const driver3 = requestDriver("Usman (Driver 3)", 2000, true); // accepts (slower)
 
  // Promise.any — resolves with first FULFILLED promise
  // Ignores rejections unless ALL drivers decline
  Promise.any([driver1, driver2, driver3])
    .then((assignedDriver) => {
      res.json({
        success: true,
        message: `Order #${orderId} assigned to ${assignedDriver.driver}`,
        note: "Skipped drivers who declined",
        assignedDriver,
      });
    })
    .catch(() => {
      // Only fires if ALL drivers declined
      res.status(503).json({
        success: false,
        message: "No drivers available — all declined the order",
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});