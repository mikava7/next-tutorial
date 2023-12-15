import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "minute",
  fireImmediately: true,
});

//Note: We can create as many limiters as we need, for each individual request and names them accordingly, for examlpe: getLimiter, postLimiter, todosLimiter adn so on.
