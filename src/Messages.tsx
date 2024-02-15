import { ContainerUri } from "@ldo/solid";
import {
  useLdo,
  useResource,
  useSolidAuth,
  useSubject,
} from "@ldo/solid-react";
import {
  ChatMessageShapeShapeType,
  ChatShapeShapeType,
} from "./.ldo/chat.shapeTypes";
import { ChatMessageShape } from "./.ldo/chat.typings";
import { v4 } from "uuid";

type Props = { uri: ContainerUri };

export default function Messages({ uri }: Props) {
  const indexUri = `${uri}index.ttl`;
  const { session } = useSolidAuth();
  const resource = useResource(indexUri);
  const data = useSubject(ChatShapeShapeType, indexUri);
  const { createData, changeData, commitData } = useLdo();

  const createHandleEditMessage = (message: ChatMessageShape) => async () => {
    const editedMessage = changeData(message, resource);

    editedMessage.content += " UPDATED";

    const result = await commitData(editedMessage);

    if (result.isError) {
      alert(result.message);
    }
  };

  const handleNewMessage2 = async () => {
    if (!session.webId) return;

    const editedChat = changeData(data, resource);

    editedChat.message?.push({
      "@id": v4(),
      created: `${new Date()}`,
      content: "I'm a message added afterwards",
      maker: {
        "@id": session.webId,
      },
    });

    const result = await commitData(editedChat);

    if (result.isError) {
      alert(result.message);
    }
  };

  return (
    <>
      <h1>{data.title}</h1>
      {data.message?.map((message) => (
        <div key={message["@id"]}>
          <p>{message.content}</p>
          <small>{message.created}</small>
          <button onClick={createHandleEditMessage(message)}>Edit</button>
          <hr />
        </div>
      ))}

      <button onClick={handleNewMessage2}>Add message</button>
    </>
  );
}
