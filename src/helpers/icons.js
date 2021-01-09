import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faFolderPlus,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faFolderPlus,
    faPhoneSquareAlt,
    faEnvelopeSquare,
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
