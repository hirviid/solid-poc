import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for chat
 * =============================================================================
 */

/**
 * ChatShape Type
 */
export interface ChatShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Chat";
  };
  author: {
    "@id": string;
  };
  title: string;
  message?: ChatMessageShape[];
  participation?: ChatParticipationShape[];
}

/**
 * ChatMessageShape Type
 */
export interface ChatMessageShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  created: string;
  content: string;
  maker: {
    "@id": string;
  };
}

/**
 * ChatParticipationShape Type
 */
export interface ChatParticipationShape {
  "@id"?: string;
  "@context"?: ContextDefinition;
  dtstart: string;
  participant: {
    "@id": string;
  };
}
