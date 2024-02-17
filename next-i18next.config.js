const path = require('path');

module.exports = {
    i18n: {
      defaultLocale: "en",
      locales: ["en", "tr", "ru", "fa"],
    },
    localePath: path.resolve("./translations"),
    reloadOnPrerender: process.env.NODE_ENV !== "production",
    react: { useSuspense: false },
  };
  