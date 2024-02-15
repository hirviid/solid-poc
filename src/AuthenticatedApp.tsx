import { v4 } from "uuid";
import { useLdo, useSolidAuth } from "@ldo/solid-react";
import { useMainContainer } from "./hooks/useMainContainer";
import { ChatShapeShapeType } from "./.ldo/chat.shapeTypes";
import { Container } from "@ldo/solid";
import Messages from "./Messages";

export default function AuthenticatedApp() {
  const { session } = useSolidAuth();
  const mainContainer = useMainContainer("chat");
  const { createData, commitData } = useLdo();
  console.log(session.webId);
  const handleCreateNewChat = async () => {
    if (!mainContainer || !session.webId) return;

    const containerResult = await mainContainer.createChildAndOverwrite(
      `${v4()}/`,
    );

    if (containerResult.isError) {
      alert(containerResult.message);
      return;
    }

    const container = containerResult.resource;
    if (container.type !== "container") return;

    const indexResource = container.child("index.ttl");
    const chat = createData(
      ChatShapeShapeType,
      indexResource.uri,
      indexResource,
    );

    chat.title = "Chat history";
    chat.message = [
      {
        "@id": v4(),
        created: `${new Date()}`,
        content: "I'm a message",
        maker: {
          "@id": session.webId,
        },
      },
      {
        "@id": v4(),
        created: `${new Date()}`,
        content: "I'm another message",
        maker: {
          "@id": session.webId,
        },
      },
    ];

    const result = await commitData(chat);

    if (result.isError) {
      alert(result.message);
    }
  };

  const childContainers =
    mainContainer
      // Get all the children of the main container
      ?.children()
      // Filter out children that aren't containers themselves
      .filter((child): child is Container => child.type === "container") ?? [];

  return (
    <div>
      <button onClick={handleCreateNewChat}>Create new chat</button>
      {childContainers.map((container) => (
        <Messages key={container.uri} uri={container.uri} />
      ))}
    </div>
  );
}
