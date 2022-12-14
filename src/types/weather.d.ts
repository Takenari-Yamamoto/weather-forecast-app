export interface Weather {
  data: WeatherInfo[];
  city_name: string;
  lon: number;
  timezone: string;
  lat: number;
  country_code: string;
  state_code: string;
}

export interface WeatherInfo {
  moonrise_ts: number;
  wind_cdir: string;
  rh: number;
  pres: number;
  high_temp: number;
  sunset_ts: number;
  ozone: number;
  moon_phase: number;
  wind_gust_spd: number;
  snow_depth: number;
  clouds: number;
  ts: number;
  sunrise_ts: number;
  app_min_temp: number;
  wind_spd: number;
  pop: number;
  wind_cdir_full: string;
  moon_phase_lunation: number;
  slp: number;
  app_max_temp: number;
  valid_date: string;
  vis: number;
  snow: number;
  dewpt: number;
  uv: number;
  weather: Weather1;
  wind_dir: number;
  max_dhi?: null;
  clouds_hi: number;
  precip: number;
  low_temp: number;
  max_temp: number;
  moonset_ts: number;
  datetime: string;
  temp: number;
  min_temp: number;
  clouds_mid: number;
  clouds_low: number;
}

export interface Weather1 {
  icon: string;
  code: number;
  description: string;
}
