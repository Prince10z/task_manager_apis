import taskmodel from "../model/taskmodels.js";
function generateUniqueTaskId() {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 10000); // 
    return `${timestamp}-${randomPart}`;
}
export async function addtask(req, res) {
    const uniquetaskID = generateUniqueTaskId();
    const { uid, title, subtitle, endtime } = req.body;
    if (!uid, !title, !subtitle, !endtime) {
        return res.status(400).json({
            status: "Error",
            msg: "uid , title , subtitle and endtime are required"
        });
    }
    try {
        await taskmodel.create({
            uid: uid,
            taskid: uniquetaskID,
            title: title,
            subtitle: subtitle,
            done: false,
            endtime: endtime,
        });
        return res.status(200).json({ status: "Success" });
    } catch (error) {
        console.error("Error finding tasks:", error);
        return res.status(500).json({ error: "Internal Server Error" }); // Handle error gracefully
    }
}
export async function changetask(req, res) {
    const { taskid, title, subtitle, endtime } = req.body;
    if (!taskid || !title || !subtitle || !endtime) {
        return res.status(400).json({ error: "Missing required fields in request body (taskid, title, subtitle, endtime)" });
    }
    try {
        const updtetask = await taskmodel.updateOne({
            taskid: taskid
        }, {
            title: title,
            subtitle: subtitle,
            endtime: endtime
        })
        if (updatedTask.matchedCount === 0) {
            return res.status(404).json({ error: "Task not found" }); // Task not found with the provided ID
        } else if (updatedTask.modifiedCount === 0) {
            return res.status(304).json({ message: "Task not modified (no changes detected)" });
        } else {
            return res.status(200).json({ message: "Task updated successfully" });
        }
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}
export async function getTasks(req, res) {
    const { uid } = req.body;
    if (!uid) {
        return res.status(400).json({
            status: "Error",
            msg: "id is required"
        });
    }
    try {
        const users = await taskmodel.find({ uid: id });
        return res.status(200).json(users);
    } catch (error) {
        console.error("Error finding tasks:", error);
        return res.status(500).json({ error: "Internal Server Error" }); // Handle error gracefully
    }
}
export async function deletetask(req, res) {
    const { uid, taskid } = req.body;
    if (!uid || !taskid) {
        return res.status(400).json({
            status: "Error",
            msg: "id and uid are required"
        });
    }
    try {
        await taskmodel.deleteOne({ uid: uid, taskid: taskid });

        return res.status(200).json({ status: "Success" });
    } catch (error) {
        console.error("Error finding tasks:", error);
        return res.status(500).json({ error: "Internal Server Error" }); // Handle error gracefully
    }
}
export async function taskcompletion(req, res) {
    const { uid, taskid, done } = req.body;
    if (!taskid || !done || !uid) {
        return res.status(400).json({
            status: "Error",
            msg: "uid ,taskid and done are required"
        });
    }
    try {
        const updtetask = await taskmodel.updateOne({
            uid: uid,
            taskid: taskid
        }, {
            done: done
        })
        if (updatedTask.matchedCount === 0) {
            return res.status(404).json({ error: "Task not found" }); // Task not found with the provided ID
        } else if (updatedTask.modifiedCount === 0) {
            return res.status(304).json({ message: "Task not modified (no changes detected)" });
        } else {
            return res.status(200).json({ message: "Task updated successfully" });
        }
    }
    catch (error) {
        console.error("Error finding tasks:", error);
        return res.status(500).json({ error: "Internal Server Error" }); // Handle error gracefully
    }
}