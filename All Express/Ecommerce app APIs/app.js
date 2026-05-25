import express from "express";
import products from "./products.json" with { type: "json" };
import orders from "./orders.json" with { type: "json" };
import users from "./users.json" with { type: "json" };
import fs from "fs";

const app = express();
const PORT = 8000;

app.get("/", (req,res) => {
    res.send("User logged in");
});

const { products: productList } = products;
app.get("/products",(req,res) =>{
    res.send(products);
} )

const { orders: orderList } = orders;
app.get("/orders", (req,res) => {
    res.send(orders);
}) 

const { users: usersList } = users;
app.get("/users",(req,res) => {
    res.send(users);
})

app.get("/products/:productVar", (req, res) => {

    const productVar = req.params.productVar; 
    const productId = Number(productVar);          
    const productName = productVar;                  

    const product = productList.find(p => 
        (p.productId === productId) || (p.name === productName)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }
    res.send(product);
});

app.get("/users/:userVar", (req, res) => {

    const userVar = req.params.userVar; 
    const userId = Number(userVar);          
    const userName = userVar;                  

    const user = usersList.find(u => 
        (u.userId === userId) || (u.name === userName)
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.send(user);
});

//Is main sir se puchna k post lagega ya delete
app.delete("/orders/cancel/:Id", (req, res) => {

    const orderId = Number(req.params.Id.trim());

    const index = orderList.findIndex(o => o.orderId === orderId);

    if (index === -1) {
        return res.status(404).json({ message: "Order not found" });
    }

    orderList.splice(index, 1); 

    fs.writeFileSync("orders.json", JSON.stringify({ orders: orderList }, null, 2));

    res.json({ message: "Order cancelled successfully" });

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});