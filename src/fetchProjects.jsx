import { createClient } from "contentful";

const client = createClient({
  space: "su0dc6co1tdh",
  environment: "master",
  accessToken: "jq8w9SNuofWUa3mw1cirmXvdnhr5XMv0KRWA5lMmLq8",
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
