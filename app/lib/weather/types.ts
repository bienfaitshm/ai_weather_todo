/**
 * Type représentant les informations de localisation pour les données météorologiques.
 */
export type WeatherLocation = {
  /**
   * Nom de la localisation (ville, village, etc.).
   */
  name: string;
  /**
   * Région ou état de la localisation.
   */
  region: string;
  /**
   * Pays de la localisation.
   */
  country: string;
  /**
   * Latitude de la localisation.
   */
  lat: number;
  /**
   * Longitude de la localisation.
   */
  lon: number;
  /**
   * Identifiant du fuseau horaire (ex: "Europe/London").
   */
  tz_id: string;
  /**
   * Heure locale de la localisation en format Epoch (secondes depuis le 1er janvier 1970 UTC).
   */
  localtime_epoch: number;
  /**
   * Heure locale de la localisation au format "YYYY-MM-DD HH:MM".
   */
  localtime: string;
}

/**
 * Type représentant les informations sur les conditions météorologiques actuelles ou prévues.
 */
export type Condition = {
  /**
   * Description textuelle de la condition météorologique (ex: "Partly cloudy").
   */
  text: string;
  /**
   * URL de l'icône représentant la condition météorologique.
   */
  icon: string;
  /**
   * Code numérique identifiant la condition météorologique.
   */
  code: number;
}

/**
 * Type représentant les informations météorologiques actuelles.
 */
export type CurrentWeather = {
  /**
   * Timestamp Epoch (secondes depuis le 1er janvier 1970 UTC) de la dernière mise à jour des données.
   */
  last_updated_epoch: number;
  /**
   * Date et heure de la dernière mise à jour des données au format "YYYY-MM-DD HH:MM".
   */
  last_updated: string;
  /**
   * Température actuelle en degrés Celsius.
   */
  temp_c: number;
  /**
   * Température actuelle en degrés Fahrenheit.
   */
  temp_f: number;
  /**
   * Indique s'il fait jour (1) ou nuit (0).
   */
  is_day: number;
  /**
   * Objet contenant les informations sur la condition météorologique actuelle.
   */
  condition: Condition;
  /**
   * Vitesse du vent en miles par heure.
   */
  wind_mph: number;
  /**
   * Vitesse du vent en kilomètres par heure.
   */
  wind_kph: number;
  /**
   * Direction du vent en degrés (0-360).
   */
  wind_degree: number;
  /**
   * Direction du vent en abrégé (ex: "N", "SW").
   */
  wind_dir: string;
  /**
   * Pression atmosphérique en millibars.
   */
  pressure_mb: number;
  /**
   * Pression atmosphérique en pouces.
   */
  pressure_in: number;
  /**
   * Précipitations en millimètres.
   */
  precip_mm: number;
  /**
   * Précipitations en pouces.
   */
  precip_in: number;
  /**
   * Humidité relative en pourcentage.
   */
  humidity: number;
  /**
   * Couverture nuageuse en pourcentage.
   */
  cloud: number;
  /**
   * Température ressentie en degrés Celsius.
   */
  feelslike_c: number;
  /**
   * Température ressentie en degrés Fahrenheit.
   */
  feelslike_f: number;
  /**
   * Refroidissement éolien en degrés Celsius (peut être nul si la température est élevée).
   */
  windchill_c: number;
  /**
   * Refroidissement éolien en degrés Fahrenheit (peut être nul si la température est élevée).
   */
  windchill_f: number;
  /**
   * Indice de chaleur en degrés Celsius (peut être nul si la température est basse).
   */
  heatindex_c: number;
  /**
   * Indice de chaleur en degrés Fahrenheit (peut être nul si la température est basse).
   */
  heatindex_f: number;
  /**
   * Point de rosée en degrés Celsius.
   */
  dewpoint_c: number;
  /**
   * Point de rosée en degrés Fahrenheit.
   */
  dewpoint_f: number;
  /**
   * Visibilité en kilomètres.
   */
  vis_km: number;
  /**
   * Visibilité en miles.
   */
  vis_miles: number;
  /**
   * Indice UV.
   */
  uv: number;
  /**
   * Rafales de vent en miles par heure.
   */
  gust_mph: number;
  /**
   * Rafales de vent en kilomètres par heure.
   */
  gust_kph: number;
}

/**
 * Type représentant les informations astronomiques (lever et coucher du soleil et de la lune).
 */
export type Astro = {
  /**
   * Heure du lever du soleil au format "HH:MM".
   */
  sunrise: string;
  /**
   * Heure du coucher du soleil au format "HH:MM".
   */
  sunset: string;
  /**
   * Heure du lever de la lune au format "HH:MM".
   */
  moonrise: string;
  /**
   * Heure du coucher de la lune au format "HH:MM".
   */
  moonset: string;
  /**
   * Phase de la lune (ex: "New Moon", "First Quarter").
   */
  moon_phase: string;
  /**
   * Illumination de la lune en pourcentage (0-100).
   */
  moon_illumination: number;
  /**
   * Indique si la lune est levée (1) ou couchée (0).
   */
  is_moon_up: number;
  /**
   * Indique si le soleil est levé (1) ou couché (0).
   */
  is_sun_up: number;
}

/**
 * Type représentant les informations de prévision pour un jour spécifique.
 */
export type DayForecast = {
  /**
   * Température maximale prévue en degrés Celsius.
   */
  maxtemp_c: number;
  /**
   * Température maximale prévue en degrés Fahrenheit.
   */
  maxtemp_f: number;
  /**
   * Température minimale prévue en degrés Celsius.
   */
  mintemp_c: number;
  /**
   * Température minimale prévue en degrés Fahrenheit.
   */
  mintemp_f: number;
  /**
   * Température moyenne prévue en degrés Celsius.
   */
  avgtemp_c: number;
  /**
   * Température moyenne prévue en degrés Fahrenheit.
   */
  avgtemp_f: number;
  /**
   * Vitesse maximale du vent prévue en miles par heure.
   */
  maxwind_mph: number;
  /**
   * Vitesse maximale du vent prévue en kilomètres par heure.
   */
  maxwind_kph: number;
  /**
   * Précipitations totales prévues en millimètres.
   */
  totalprecip_mm: number;
  /**
   * Précipitations totales prévues en pouces.
   */
  totalprecip_in: number;
  /**
   * Chutes de neige totales prévues en centimètres.
   */
  totalsnow_cm: number;
  /**
   * Visibilité moyenne prévue en kilomètres.
   */
  avgvis_km: number;
  /**
   * Visibilité moyenne prévue en miles.
   */
  avgvis_miles: number;
  /**
   * Humidité relative moyenne prévue en pourcentage.
   */
  avghumidity: number;
  /**
   * Indique s'il va pleuvoir (1) ou non (0) durant la journée.
   */
  daily_will_it_rain: number;
  /**
   * Probabilité de pluie en pourcentage pour la journée.
   */
  daily_chance_of_rain: number;
  /**
   * Indique s'il va neiger (1) ou non (0) durant la journée.
   */
  daily_will_it_snow: number;
  /**
   * Probabilité de neige en pourcentage pour la journée.
   */
  daily_chance_of_snow: number;
  /**
   * Objet contenant les informations sur la condition météorologique du jour.
   */
  condition: Condition;
  /**
   * Indice UV maximal prévu pour la journée.
   */
  uv: number;
}

/**
 * Type représentant les informations de prévision horaire.
 */
export type HourForecast = {
  /**
   * Timestamp Epoch (secondes depuis le 1er janvier 1970 UTC) de l'heure de la prévision.
   */
  time_epoch: number;
  /**
   * Heure de la prévision au format "YYYY-MM-DD HH:MM".
   */
  time: string;
  /**
   * Température prévue en degrés Celsius pour cette heure.
   */
  temp_c: number;
  /**
   * Température prévue en degrés Fahrenheit pour cette heure.
   */
  temp_f: number;
  /**
   * Indique s'il fera jour (1) ou nuit (0) à cette heure.
   */
  is_day: number;
  /**
   * Objet contenant les informations sur la condition météorologique prévue pour cette heure.
   */
  condition: Condition;
  /**
   * Vitesse du vent prévue en miles par heure pour cette heure.
   */
  wind_mph: number;
  /**
   * Vitesse du vent prévue en kilomètres par heure pour cette heure.
   */
  wind_kph: number;
  /**
   * Direction du vent prévue en degrés (0-360) pour cette heure.
   */
  wind_degree: number;
  /**
   * Direction du vent prévue en abrégé (ex: "N", "SW") pour cette heure.
   */
  wind_dir: string;
  /**
   * Pression atmosphérique prévue en millibars pour cette heure.
   */
  pressure_mb: number;
  /**
   * Pression atmosphérique prévue en pouces pour cette heure.
   */
  pressure_in: number;
  /**
   * Précipitations prévues en millimètres pour cette heure.
   */
  precip_mm: number;
  /**
   * Précipitations prévues en pouces pour cette heure.
   */
  precip_in: number;
  /**
   * Chutes de neige prévues en centimètres pour cette heure.
   */
  snow_cm: number;
  /**
   * Humidité relative prévue en pourcentage pour cette heure.
   */
  humidity: number;
  /**
   * Couverture nuageuse prévue en pourcentage pour cette heure.
   */
  cloud: number;
  /**
   * Température ressentie prévue en degrés Celsius pour cette heure.
   */
  feelslike_c: number;
  /**
   * Température ressentie prévue en degrés Fahrenheit pour cette heure.
   */
  feelslike_f: number;
  /**
   * Refroidissement éolien prévu en degrés Celsius pour cette heure (peut être nul si la température est élevée).
   */
  windchill_c: number;
  /**
   * Refroidissement éolien prévu en degrés Fahrenheit pour cette heure (peut être nul si la température est élevée).
   */
  windchill_f: number;
  /**
   * Indice de chaleur prévu en degrés Celsius pour cette heure (peut être nul si la température est basse).
   */
  heatindex_c: number;
  /**
   * Indice de chaleur prévu en degrés Fahrenheit pour cette heure (peut être nul si la température est basse).
   */
  heatindex_f: number;
  /**
   * Point de rosée prévu en degrés Celsius pour cette heure.
   */
  dewpoint_c: number;
  /**
   * Point de rosée prévu en degrés Fahrenheit pour cette heure.
   */
  dewpoint_f: number;
  /**
   * Indique s'il va pleuvoir (1) ou non (0) à cette heure.
   */
  will_it_rain: number;
  /**
   * Probabilité de pluie en pourcentage pour cette heure.
   */
  chance_of_rain: number;
  /**
   * Indique s'il va neiger (1) ou non (0) à cette heure.
   */
  will_it_snow: number;
  /**
   * Probabilité de neige en pourcentage pour cette heure.
   */
  chance_of_snow: number;
  /**
   * Visibilité prévue en kilomètres pour cette heure.
   */
  vis_km: number;
  /**
   * Visibilité prévue en miles pour cette heure.
   */
  vis_miles: number;
  /**
   * Rafales de vent prévues en miles par heure pour cette heure.
   */
  gust_mph: number;
  /**
   * Rafales de vent prévues en kilomètres par heure pour cette heure.
   */
  gust_kph: number;
  /**
   * Indice UV prévu pour cette heure.
   */
  uv: number;
}

/**
 * Type représentant les informations de prévision pour un jour spécifique, incluant les détails du jour, les informations astronomiques et les prévisions horaires.
 */
export type ForecastDay = {
  /**
   * Date de la prévision au format "YYYY-MM-DD".
   */
  date: string;
  /**
   * Timestamp Epoch (secondes depuis le 1er janvier 1970 UTC) de la date de la prévision.
   */
  date_epoch: number;
  /**
   * Objet contenant les informations de prévision pour la journée.
   */
  day: DayForecast;
  /**
   * Objet contenant les informations astronomiques pour la journée.
   */
  astro: Astro;
  /**
   * Tableau d'objets contenant les informations de prévision horaire pour la journée.
   */
  hour: HourForecast[];
}

/**
 * Type représentant la structure complète des données de prévisions météorologiques.
 */
export type WeatherForecast = {
  /**
   * Objet contenant les informations de localisation.
   */
  location: WeatherLocation;
  /**
   * Objet contenant les informations météorologiques actuelles.
   */
  current: CurrentWeather;
  /**
   * Objet contenant les informations de prévision.
   */
  forecast: {
    /**
     * Tableau d'objets contenant les prévisions pour chaque jour.
     */
    forecastday: ForecastDay[];
  };
}