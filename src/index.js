import Search from './Icons/Search'
import Folder from './Icons/Folder'
import Wallet from './Icons/Wallet'
import Graph from './Icons/Graph'
import Bookmark from './Icons/Bookmark'
import Category from './Icons/Category'
import Home from './Icons/Home'
import Notification from './Icons/Notification'
import Chat from './Icons/Chat'
import Heart from './Icons/Heart'
import Heart2 from './Icons/Heart2'
import Paper from './Icons/Paper'
import PaperPlus from './Icons/PaperPlus'
import PaperNegative from './Icons/PaperNegative'
import PaperFall from './Icons/PaperFall'
import PaperDownload from './Icons/PaperDownload'
import PaperUpload from './Icons/PaperUpload'
import Send from './Icons/Send'
import Password from './Icons/Password'
import Swap from './Icons/Swap'
import Work from './Icons/Work'
import Scan from './Icons/Scan'
import Activity from './Icons/Activity'
import Calendar from './Icons/Calendar'
import Message from './Icons/Message'
import Video from './Icons/Video'
import Plus from './Icons/Plus'
import Chart from './Icons/Chart'
import Game from './Icons/Game'
import Bag from './Icons/Bag'
import Bag2 from './Icons/Bag2'
import TicketStar from './Icons/TicketStar'
import MoreCircle from './Icons/MoreCircle'
import MoreSquare from './Icons/MoreSquare'
import Discount from './Icons/Discount'
import Buy from './Icons/Buy'
import InfoCircle from './Icons/InfoCircle'
import InfoSquare from './Icons/InfoSquare'
import Danger from './Icons/Danger'
import CloseSquare from './Icons/CloseSquare'
import TickSquare from './Icons/TickSquare'
import Discovery from './Icons/Discovery'
import Location from './Icons/Location'
import Document from './Icons/Document'
import Setting from './Icons/Setting'
import TimeSquare from './Icons/TimeSquare'
import TimeCircle from './Icons/TimeCircle'
import VolumeUp from './Icons/VolumeUp'
import VolumeDown from './Icons/VolumeDown'
import VolumeOff from './Icons/VolumeOff'
import Star from './Icons/Star'
import Ticket from './Icons/Ticket'
import Camera from './Icons/Camera'
import User from './Icons/User'
import AddUser from './Icons/AddUser'
import TwoUsers from './Icons/TwoUsers'
import People from './Icons/People'
import Login from './Icons/Login'
import Logout from './Icons/Logout'
import Download from './Icons/Download'
import Upload from './Icons/Upload'
import Voice from './Icons/Voice'
import Voice2 from './Icons/Voice2'
import Delete from './Icons/Delete'
import Edit from './Icons/Edit'
import EditSquare from './Icons/EditSquare'
import Play from './Icons/Play'
import ShieldDone from './Icons/ShieldDone'
import ShieldFall from './Icons/ShieldFall'
import Show from './Icons/Show'
import Hide from './Icons/Hide'
import Filter from './Icons/Filter'
import Filter2 from './Icons/Filter2'
import Image from './Icons/Image'
import Image2 from './Icons/Image2'
import Call from './Icons/Call'
import Calling from './Icons/Calling'
import CallMissed from './Icons/CallMissed'
import CallSilent from './Icons/CallSilent'
import Lock from './Icons/Lock'
import Unlock from './Icons/Unlock'
import ChevronDownCircle from './Icons/ChevronDownCircle'
import ChevronRightCircle from './Icons/ChevronRightCircle'
import ChevronUpCircle from './Icons/ChevronUpCircle'
import ChevronLeftCircle from './Icons/ChevronLeftCircle'
import ChevronDown from './Icons/ChevronDown'
import ChevronRight from './Icons/ChevronRight'
import ChevronUp from './Icons/ChevronUp'
import ChevronLeft from './Icons/ChevronLeft'
import ArrowDownSquare from './Icons/ArrowDownSquare'
import ArrowRightSquare from './Icons/ArrowRightSquare'
import ArrowUpSquare from './Icons/ArrowUpSquare'
import ArrowLeftSquare from './Icons/ArrowLeftSquare'
import ArrowDown from './Icons/ArrowDown'
import ArrowRight from './Icons/ArrowRight'
import ArrowUp from './Icons/ArrowUp'
import ArrowLeft from './Icons/ArrowLeft'
import CaretRight from './Icons/CaretRight'
import CaretDown from './Icons/CaretDown'
import CaretUp from './Icons/CaretUp'
import CaretLeft from './Icons/CaretLeft'

// export { IconlyProvider } from './lib/context'
// export { useIconlyTheme } from './lib/context'

/** Icons  **/

const Icons = {
  Search,
  Folder,
  Wallet,
  Graph,
  Bookmark,
  Category,
  Home,
  Notification,
  Chat,
  Heart,
  Heart2,
  Paper,
  PaperPlus,
  PaperNegative,
  PaperFall,
  PaperDownload,
  PaperUpload,
  Send,
  Password,
  Swap,
  Work,
  Scan,
  Activity,
  Calendar,
  Message,
  Video,
  Plus,
  Chart,
  Game,
  Bag,
  Bag2,
  TicketStar,
  MoreCircle,
  MoreSquare,
  Discount,
  Buy,
  InfoCircle,
  InfoSquare,
  Danger,
  CloseSquare,
  TickSquare,
  Discovery,
  Location,
  Document,
  Setting,
  TimeSquare,
  TimeCircle,
  VolumeUp,
  VolumeDown,
  VolumeOff,
  Star,
  Ticket,
  Camera,
  User,
  AddUser,
  TwoUsers,
  People,
  Login,
  Logout,
  Download,
  Upload,
  Voice,
  Voice2,
  Delete,
  Edit,
  EditSquare,
  Play,
  ShieldDone,
  ShieldFall,
  Show,
  Hide,
  Filter,
  Filter2,
  Image,
  Image2,
  Call,
  Calling,
  CallMissed,
  CallSilent,
  Lock,
  Unlock,
  ChevronDownCircle,
  ChevronRightCircle,
  ChevronUpCircle,
  ChevronLeftCircle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  ArrowDownSquare,
  ArrowRightSquare,
  ArrowUpSquare,
  ArrowLeftSquare,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowLeft,
  CaretRight,
  CaretDown,
  CaretUp,
  CaretLeft
}

const Iconly = ({ color, secondaryColor, strokeWidth, opacity, set, name }) => {
  const Icon = Icons[name]
  return (
    <Icon
      color={color}
      secondaryColor={secondaryColor}
      strokeWidth={strokeWidth}
      opacity={opacity}
      set={set}
    />
  )
}

export default Iconly
