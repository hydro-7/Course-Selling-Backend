const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");    
const { adminRouter } = require("./routes/admin");    
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

// before starting app.listen(), ensure that the db has been connected
// if it fails to connect to the db, the backend shouldnt even start
async function main() {
    await mongoose.connect("<db_string>/<db_name>");
    app.listen(3000);
}

main()