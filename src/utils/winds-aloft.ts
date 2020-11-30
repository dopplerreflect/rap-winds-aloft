export const transformWindsAloftData = (
  body: string,
  elevation: number
): WindsAloftData => {
  const [header, op40, , cape1, , , surface, , ...rest] = body.split(/\n/);
  const [type, hour, day, month, year] = op40.split(/[\s]+/);
  const [, , , , latitude, longitude] = cape1.split(/[\s]+/);
  const soundings = [surface, ...rest];

  return {
    header,
    op40,
    type,
    hour: Number(hour),
    month,
    day: Number(day),
    year: Number(year),
    latitude: Number(latitude),
    longitude: Number(longitude),
    elevation,
    soundings: soundings
      .map(t => {
        let [
          ,
          linType,
          pressure,
          altitudeMSL,
          temp,
          dewPt,
          windDir,
          windSpd,
        ] = t.split(/[\s]+/).map(v => Number(v));
        return {
          linType,
          pressure: pressure / 10,
          altitude: {
            metersAGL: Math.round(altitudeMSL - elevation),
            feetAGL: Math.round((altitudeMSL - elevation) * 3.28084),
            metersMSL: altitudeMSL,
            feetMSL: Math.round(altitudeMSL * 3.28084),
          },
          temp: {
            c: temp / 10,
            f: Number(((temp / 10) * 1.8 + 32).toFixed(1)),
          },
          dewPt: {
            c: dewPt / 10,
            f: Number(((dewPt / 10) * 1.8 + 32).toFixed(1)),
          },
          windDir,
          windSpd: {
            kts: windSpd,
            mph: Math.round(windSpd * 1.15078),
          },
        };
      })
      .filter(o => o.altitude.feetAGL < 16000)
      .reverse(),
  };
};
