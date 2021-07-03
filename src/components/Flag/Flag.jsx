import { ReactComponent as EU } from "./Icons/EU.svg";
import { ReactComponent as Poland } from "./Icons/Poland.svg";
import { ReactComponent as Ukraine } from "./Icons/Ukraine.svg";
import { ReactComponent as USA } from "./Icons/USA.svg";
import { ReactComponent as UK } from "./Icons/UK.svg";
import { CountryCodes } from "../../constants/currencies";

const iconLookup = {
  [CountryCodes.EUR]: EU,
  [CountryCodes.POL]: Poland,
  [CountryCodes.UKR]: Ukraine,
  [CountryCodes.USA]: USA,
  [CountryCodes.GBR]: UK,
};

const Flag = ({ country, className }) => {
  const Icon = iconLookup[country];
  return <Icon className={className} />;
};

export default Flag;
