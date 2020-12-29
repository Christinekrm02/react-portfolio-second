import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faFolderPlus);
};

export default Icons;
