import { Router } from "express";
import { AuthenticateUserController } from "./controllers/users/AuthenticaUserController";
import { CreateMessageController } from "./controllers/messages/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/messages/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/users/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
	"/messages",
	ensureAuthenticated,
	new CreateMessageController().handle,
);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
