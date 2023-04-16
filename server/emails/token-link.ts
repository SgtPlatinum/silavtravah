import { Token } from "../database";
import { env } from "../util";

export function tokenLink(token: Token) {
  const host = `https://${env("node_host", "localhost:" + env("node_port", 3000) )}`;
  return `${host}/${token.purpose}?token=${token.uuid}&uuid=${token.user.uuid}`;
}
