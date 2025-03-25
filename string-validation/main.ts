/// explained by Andrew Burguess in
/// https://www.youtube.com/watch?v=EUU_FsWDGpA
///
type DisallowedChars = '\n' | " " | '"' | "'" | "-";

type MetricName<T extends string> = T extends `${infer _a}${DisallowedChars}${infer _b}` ? never : T;

function incrementMetric<T extends string>(_metric: MetricName<T>) {};

incrementMetric("hello")
incrementMetric("he llo")
incrementMetric("he'llo")
incrementMetric('he"llo')
incrementMetric("he-llo")

