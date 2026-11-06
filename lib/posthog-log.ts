import posthog from "posthog-js";

type PostHogLogAttributes = Record<string, string | number | boolean>;

export const posthogLog = {
  info(message: string, attributes: PostHogLogAttributes) {
    posthog.logger.info(message, attributes);
  },
};
