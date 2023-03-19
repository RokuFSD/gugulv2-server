const allowedOrigins = [
  "http://localhost:5173",
  "https://gugul-searchv2.onrender.com",
];

const corsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by Cors :c"));
    }
  },
  credentials: true,
};

export default corsOptions;
