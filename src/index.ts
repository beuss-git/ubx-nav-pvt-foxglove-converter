import { ExtensionContext, MessageEvent } from "@foxglove/extension";

type GNSSNavPvt = {
  lat: number;
  lon: number;
};

export function activate(extensionContext: ExtensionContext) {
    extensionContext.registerMessageConverter({
    fromSchemaName: "microamp_interfaces/msg/GNSSNavPvt",
    toSchemaName: "foxglove.LocationFix",
    converter: (ubxNavPvt: GNSSNavPvt, _: MessageEvent<GNSSNavPvt>) => {
      return {
        latitude: ubxNavPvt.lat,
        longitude: ubxNavPvt.lon,
      };
    },
  });
}
