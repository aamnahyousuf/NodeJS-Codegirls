import express from "express";
import path from "path";

const app = express();
const PORT = 8000;

const __dirname = import.meta.dirname;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { name: 'Alice', age: 12 });
});

app.listen(PORT, () => {
  console.log(`Server is live at ${PORT}`);
});