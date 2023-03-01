enum AppRoute {
  Home = "/",
  Trip = "trip",
  StationFlow = "station",
  ManageShips = "manage-ships",
  ConfigureRoute = "configure-route",
  Overview = "overview",
  Detail = "detail",
  Route = "route",
}

enum Station {
  Jita = "60003760",
  Amarr = "60008494",
  Dodixie = "60011866",
  Rens = "60004588",
  Hek = "60005686",
  None = "0",
}

enum Region {
  Metropolis = "10000042", // Hek
  TheForge = "10000002", // Jita
  Domain = "10000043", // Amarr
  SinqLaison = "10000032", // Dodixie
  Heimatar = "10000030", // Rens
  None = "0",
}

enum RouteSecurity {
  Shortest = "shortest",
  Safest = "secure",
  LeastSafe = "insecure",
}

enum SystemSecurity {
  HighSec = "high_sec",
  LowSec = "low_sec",
  NullSec = "null_sec",
}

enum Tax {
  NoSkill = "0.08",
  Level1 = "0.0712",
  Level2 = "0.0624",
  Level3 = "0.0536",
  Level4 = "0.0448",
  Level5 = "0.036",
}

enum CargoBay {
  One = 1,
  Two = 2,
}

enum CargoBayType {
  Main,
  FleetHanger,
}

export {
  AppRoute,
  Station,
  Region,
  RouteSecurity,
  SystemSecurity,
  Tax,
  CargoBay,
  CargoBayType,
};
