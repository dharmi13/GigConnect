const express = require('express');
const authRouter = require('./router/routeruser');
const cors = require("cors");
const app = express();
const PORT = 5008;

// Middleware
 // to parse JSON bodies
const corsoption = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
// Routes
app.use(cors(corsoption));
app.use(express.json());
app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
