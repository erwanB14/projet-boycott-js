import express, { Request, Response } from "express";
import { client } from "./prisma";

const router = express.Router();
export const routers = router;

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const userid = parseInt(id);
  // console.log(userid);
  if (!userid) {
    res.json({
      message: "mauvais type",
    });
  } else {
    const user = await client.todo.delete({
      where: {
        id: userid,
      },
    });
    res.json(user);
  }
});

// router.put("/:id/change/admin", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const userid = parseInt(id);
//   // console.log(userid);
//   if (!userid) {
//     res.json({
//       message: "mauvais type",
//     });
//   } else {
//     const user = await client.todo.findFirst({
//       where: {
//         id: userid,
//       },
//     });
//     const updateuser = await client.todo.update({
//       where: {
//         id: userid,
//       },
//       data: {
//         isDone: todo?.isdone ? false : true,
//       },
//     });
//     res.json({ message: "statut change", user: updateuser });
//   }
// });
