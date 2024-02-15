import { useEffect, useState } from "react";
import { useLdo, useResource, useSolidAuth } from "@ldo/solid-react";
import { ContainerUri } from "@ldo/solid";

export function useMainContainer(containerSlug: string) {
  const { session } = useSolidAuth();
  const { getResource } = useLdo();
  const [mainContainerUri, setMainContainerUri] = useState<
    ContainerUri | undefined
  >();
  const mainContainer = useResource(mainContainerUri);

  useEffect(() => {
    if (session.webId && !mainContainerUri) {
      // Get the WebId resource
      const webIdResource = getResource(session.webId);
      // Get the root container associated with that WebId
      webIdResource.getRootContainer().then((rootContainerResult) => {
        // Check if there is an error
        if (rootContainerResult.isError) return;
        // Get a child of the root resource called "my-solid-app/"
        const mainContainer = rootContainerResult.child(`${containerSlug}/`);
        // @ts-expect-error
        setMainContainerUri(mainContainer.uri);
        // Create the main container if it doesn't exist yet
        mainContainer.createIfAbsent();
      });
    }
  }, [containerSlug, getResource, mainContainerUri, session.webId]);

  return mainContainer;
}
