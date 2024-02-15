import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * chatContext: JSONLD Context for chat
 * =============================================================================
 */
export const chatContext: ContextDefinition = {
  type: {
    "@id": "@type",
  },
  Chat: "http://www.w3.org/ns/pim/meeting#Chat",
  author: {
    "@id": "http://purl.org/dc/elements/1.1/author",
    "@type": "@id",
  },
  title: {
    "@id": "http://purl.org/dc/elements/1.1/title",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  message: {
    "@id": "http://www.w3.org/2005/01/wf/flow#message",
    "@type": "@id",
    "@container": "@set",
  },
  created: {
    "@id": "http://purl.org/dc/terms/created",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  content: {
    "@id": "http://rdfs.org/sioc/ns#content",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  maker: {
    "@id": "http://xmlns.com/foaf/0.1/maker",
    "@type": "@id",
  },
  participation: {
    "@id": "http://www.w3.org/2005/01/wf/flow#participation",
    "@type": "@id",
    "@container": "@set",
  },
  dtstart: {
    "@id": "http://www.w3.org/2002/12/cal/ical#dtstart",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  participant: {
    "@id": "http://www.w3.org/2005/01/wf/flow#participant",
    "@type": "@id",
  },
};
