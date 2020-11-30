type Sounding = {
  linType: number;
  pressure: number;
  altitude: {
    metersAGL: number;
    feetAGL: number;
    metersMSL: number;
    feetMSL: number;
  };
  temp: {
    c: number;
    f: number;
  };
  dewPt: {
    c: number;
    f: number;
  };
  windDir: number;
  windSpd: {
    kts: number;
    mph: number;
  };
};

type WindsAloftData = {
  header: string;
  op40: string;
  type: string;
  hour: number;
  month: string;
  day: number;
  year: number;
  latitude: number;
  longitude: number;
  elevation: number;
  soundings: Sounding[];
};
