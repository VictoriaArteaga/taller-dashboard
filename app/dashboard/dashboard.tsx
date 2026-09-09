import {
	BarChart3, Bell, CalendarDays, ChevronDown, ChevronLeft, ChevronRight,
	CircleArrowUp, CloudUpload, Home, LogOut,
	MessageCircle, Package, Search, ShoppingBag, ShoppingCart, Tag, Users,
} from "lucide-react";
import { FaIntercom, FaJira, FaSlack } from "react-icons/fa";

const navigation = [
	{ label: "Dashboard", icon: Home, active: true },
	{ label: "Orders", icon: ShoppingBag },
	{ label: "Products", icon: Package },
	{ label: "Analytics", icon: BarChart3 },
	{ label: "Marketing", icon: Tag },
	{ label: "Messages", icon: MessageCircle, badge: "25" },
];

const integrations = [
	{ label: "Jira", icon: FaJira, className: "text-[#2684ff]" },
	{ label: "Slack", icon: FaSlack, className: "text-[#36c5f0]" },
	{ label: "Intercom", icon: FaIntercom, className: "text-[#1f9cf0]" },
];

const metrics = [
	{ label: "Total Sales", value: "263k", change: "15.6%", icon: ShoppingCart, direction: "up" },
	{ label: "Total Visitors", value: "35k", change: "6.2%", icon: Users, direction: "down" },
	{ label: "Total Orders", value: "165k", change: "3.5%", icon: ShoppingBag, direction: "up" },
];

function Avatar() {
	return <span className="relative inline-block h-11 w-11 overflow-hidden rounded-full border-[3px] border-white bg-[#f47e32] shadow-[0_2px_9px_#da7b414d]" aria-label="Lay profile"><span className="absolute left-[7px] top-1 z-[1] h-[18px] w-8 rounded-[50%_55%_25%_20%] bg-[#43251f]" /><span className="absolute bottom-0 left-[7px] h-[31px] w-[29px] rounded-[48%_48%_45%_45%] bg-[#9b5a3e]"><span className="absolute bottom-[-1px] left-1 h-[15px] w-[21px] rounded-[5px_5px_15px_15px] bg-[#542b25]" /><span className="absolute left-[5px] top-[13px] h-1 w-1 rounded-full bg-[#241715]" /><span className="absolute right-[5px] top-[13px] h-1 w-1 rounded-full bg-[#241715]" /></span></span>;
}

function Sidebar() {
	return <aside className="flex flex-[0_0_265px] flex-col rounded-l-[22px] bg-white px-5 pb-[26px] pt-[21px] max-[1050px]:basis-[220px] max-[1050px]:px-[14px] max-[720px]:rounded-none max-[720px]:p-4">
		<div className="mb-[43px] ml-0.5 flex items-center gap-2.5 text-2xl font-extrabold tracking-[-.8px] max-[720px]:mb-[18px]"><span className="flex h-10 w-10 items-center justify-center [clip-path:polygon(50%_0%,92%_25%,92%_75%,50%_100%,8%_75%,8%_25%)] bg-[#e7ae13] text-xl text-white">R</span><span>flex</span></div>
		<p className="mb-3.5 text-xs text-[#a1a4b6]">Menu</p>
		<nav className="grid gap-2 max-[720px]:flex max-[720px]:flex-wrap max-[720px]:gap-[5px]" aria-label="Main navigation">{navigation.map(({ label, icon: Icon, active, badge }) => <button className={`flex min-h-11 items-center gap-3.5 rounded-[24px] border-0 px-4 text-left text-sm font-bold text-[#171934] transition-colors hover:bg-[#f2f1ff] ${active ? "bg-[#5046e5] text-white shadow-[0_11px_20px_#5046e533]" : ""} max-[720px]:min-h-[38px] max-[720px]:px-[11px]`} key={label}><Icon size={18} strokeWidth={active ? 2.6 : 2.2} /><span>{label}</span>{badge ? <small className="ml-auto inline-flex h-5 w-[21px] items-center justify-center rounded-[10px] bg-[#31b88a] text-[10px] text-white max-[720px]:hidden">{badge}</small> : label !== "Dashboard" && label !== "Analytics" ? <ChevronDown className="ml-auto max-[720px]:hidden" size={14} /> : null}</button>)}</nav>
		<p className="mb-3.5 mt-[35px] text-xs text-[#a1a4b6] max-[720px]:hidden">Integrations</p>
		<nav className="grid gap-2 max-[720px]:hidden" aria-label="Integrations">{integrations.map(({ label, icon: Icon, className }) => <button className="flex min-h-[43px] items-center gap-3.5 rounded-[24px] border-0 px-4 text-left text-sm font-bold text-[#171934] hover:bg-[#f2f1ff]" key={label}><Icon className={className} size={19} /><span>{label}</span></button>)}</nav>
		<button className="mt-auto flex min-h-11 items-center gap-3.5 rounded-[24px] border-0 px-4 text-left text-sm font-bold text-[#171934] hover:bg-[#f2f1ff] max-[720px]:hidden"><LogOut size={19} strokeWidth={2.8} /><span>Logout</span></button>
	</aside>;
}

function MetricCard({ label, value, change, icon: Icon, direction }: (typeof metrics)[number]) {
	return <article className="flex min-h-[96px] items-center gap-4 rounded-[15px] bg-white px-5 py-4 max-[720px]:min-h-[84px]"><span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0efff] text-[#5c54e2]"><Icon size={21} /></span><div><p className="mb-1.5 text-[13px] text-[#82869a]">{label}</p><div className="flex items-baseline gap-2.5"><strong className="text-[29px] tracking-[-.8px] max-[390px]:text-[25px]">{value}</strong><span className={`whitespace-nowrap text-xs font-bold ${direction === "up" ? "text-[#3bb68e]" : "text-[#ed7779]"}`}>{direction === "up" ? "↑" : "↓"} {change}</span></div></div></article>;
}

function SessionsCard() {
	return <article className="relative min-h-[430px] rounded-[15px] bg-white px-5 pb-4 pt-5 max-[720px]:min-h-[410px]"> 
    <div className="flex justify-between">
        <div>
			<p className="mb-6 text-[15px] font-bold text-[#171934] h-25">Online Store Sessions</p>

    <div className="flex items-center gap-[11px]">
		<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f0efff] text-[#5c54e2]">
			<Users size={20} /></span><div><span className="mb-1 block text-xs text-[#a0a3b4]">Visitors</span><strong className="block text-[29px] leading-none">68</strong></div>
            </div>
            </div>
			<button className="h-9 rounded-[22px] border border-[#ececf3] bg-white px-4 text-[13px] text-[#8d91a0]">View Report</button>
            </div>
            <div className="absolute right-4 top-[70px] flex gap-4 text-[11px]"><span className="text-[#3bb68e]">↑ 15.6%</span><span className="font-bold text-[#5c54e2]">26</span><span className="text-[#ed7779]">↓ 1.6%</span></div><div className="my-[18px] border-t border-[#eeeef3]" /><div className="flex items-center justify-between"><p className="text-[12px] font-bold text-[#171934]">Sessions Over Time</p><button className="flex items-center gap-2 rounded-[22px] border border-[#ececf3] bg-white px-[11px] py-[7px] text-xs text-[#8e92a0]"><CalendarDays size={14} /> February <ChevronDown size={14} /></button></div><div className="mt-[5px] flex h-40"><div className="flex flex-col justify-between py-1 pr-2 text-[10px] text-[#a5a8b6]"><span>15</span><span>10</span><span>5</span><span>0</span></div><svg className="h-full w-full overflow-visible" viewBox="0 0 420 145" role="img" aria-label="Sessions over time chart"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7770ed" stopOpacity=".18" /><stop offset="1" stopColor="#7770ed" stopOpacity="0" /></linearGradient></defs><path className="fill-none stroke-[#ebebf0]" strokeWidth="1" d="M0 16H420 M0 57H420 M0 98H420 M0 139H420" /><path className="fill-[url(#chart-fill)]" d="M0 139 C31 136 31 83 61 83 S95 127 125 127 S159 129 181 98 S216 60 242 90 S275 141 302 112 S332 16 360 20 S393 18 420 17 L420 145 L0 145Z" /><path className="fill-none stroke-[#7770ed]" strokeLinecap="round" strokeWidth="3" d="M0 139 C31 136 31 83 61 83 S95 127 125 127 S159 129 181 98 S216 60 242 90 S275 141 302 112 S332 16 360 20 S393 18 420 17" /></svg></div><div className="mt-1 flex items-center justify-center gap-[19px] text-[11px] text-[#a5a8b6]"><button className="inline-flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#ececf3] bg-white text-[#c0c3cd]" aria-label="Previous week"><ChevronLeft size={16} /></button><span className="inline-flex h-[37px] w-[37px] items-center justify-center rounded-full bg-[#4d43e4] text-white shadow-[0_7px_14px_#5046e555]">21</span><span>22</span><span>23</span><span>24</span><span>25</span><button className="inline-flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#ececf3] bg-white text-[#c0c3cd]" aria-label="Next week"><ChevronRight size={16} /></button></div></article>;
}

function UpgradeCard() { return <article className="relative mb-4 flex min-h-[155px] overflow-hidden rounded-[15px] bg-[#5147e9] p-5 text-white max-[1050px]:min-h-[205px]"><div><p className="mb-1 text-xl font-bold">Need More Stats?</p><span className="text-xs text-[#bbb8ff]">Upgrade to pro for added benefits.</span><button className="mt-5 flex items-center gap-1.5 rounded-[20px] border-0 bg-[#33ba8e] px-5 py-2.5 text-xs font-bold text-white shadow-[0_6px_13px_#2722a34d]"><CircleArrowUp size={17} /> Go Pro Now</button></div><div className="absolute right-[13px] top-[-10px] text-4xl text-[#e8e9ff]"><span>↗</span><span className="ml-4">↑</span><span className="absolute bottom-[-100px] left-0">☁</span></div></article>; }

function ConversionCard() { return <article className="min-h-[250px] rounded-[15px] bg-white px-5 pt-5 max-[1050px]:min-h-[190px]"><p className="text-[15px] font-bold text-[#171934]">Conversion</p><div className="relative mx-auto mt-1 h-[128px] w-[78%] max-w-[250px] overflow-hidden rounded-t-[170px] bg-[conic-gradient(from_270deg_at_50%_100%,#7169ef_0deg_148deg,#e9e9f8_148deg_180deg,transparent_180deg)] after:absolute after:bottom-0 after:left-[16%] after:h-[80px] after:w-[68%] after:rounded-t-[145px] after:bg-white"><span className="absolute left-[72%] top-[41%] z-[2] h-10 w-[3px] rotate-[52deg] bg-[#7169ef]" /><div className="absolute bottom-2 z-[1] w-full text-center"><strong className="block text-[25px]">58,19%</strong><span className="text-[11px] font-bold text-[#36b88d]">↑ 3.5%</span></div></div><div className="mt-3 flex justify-between gap-3 border-t border-[#eeeef3] pt-3 text-[11px] text-[#9da0b0] max-[720px]:flex-wrap"><span><b className="mr-1.5 text-[17px] text-[#37b78e]">↙</b> Income <strong className="ml-1.5 text-[#42455a]">$542,317</strong></span><span><b className="mr-1.5 text-[17px] text-[#1d223c]">↗</b> Expenses <strong className="ml-1.5 text-[#42455a]">$497,456</strong></span></div></article>; }

export default function Dashboard() {
		return <main className="flex min-h-screen gap-0 bg-[#f5f6fa] p-[18px] max-[1050px]:p-2.5 max-[720px]:block max-[720px]:p-0"><Sidebar /><section className="min-w-0 flex-1 rounded-r-[22px] bg-white px-[34px] pb-10 pt-[22px] max-[1050px]:px-[22px] max-[720px]:rounded-none max-[720px]:px-3.5 max-[720px]:pb-7 max-[720px]:pt-[18px]"><header className="flex min-h-[46px] items-center gap-6 max-[720px]:gap-2.5"><button className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#ececf3] bg-white text-[#c5c8d2] max-[720px]:hidden" aria-label="Back"><ChevronLeft size={18} /></button><label className="flex w-full max-w-[355px] items-center gap-2 rounded-[24px] border border-[#e4e5ec] px-3.5 py-2 text-[#afb2c0] max-[720px]:max-w-none"><Search size={18} /><input className="w-full border-0 text-[13px] text-[#11152d] outline-none placeholder:text-[#b5b8c4]" aria-label="Search" placeholder="Search" /></label><div className="ml-auto flex items-center gap-[13px] max-[720px]:gap-2"><button className="relative inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#ececf3] bg-white text-[#c5c8d2]" aria-label="Notifications"><Bell size={18} /><span className="absolute right-[7px] top-1.5 h-2 w-2 rounded-full border-2 border-white bg-[#574bf0]" /></button><div className="grid gap-0.5 border-r border-[#ececf3] pr-[18px] max-[720px]:hidden w-20"><span className="text-[9px] text-[#a4a6b4]">Your Balance</span><strong className="text-sm text-[#554ceb]">$5,456</strong></div><Avatar /><div className="whitespace-nowrap text-[13px] font-bold max-[720px]:hidden">Hi, Lay</div><ChevronDown className="max-[720px]:hidden" size={15} /></div></header><div className="my-[34px] flex items-center justify-between max-[720px]:mb-[18px] max-[720px]:mt-6 max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-4"><div className="flex items-center gap-3.5"><span className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#4f45de] text-white shadow-[0_8px_16px_#5046e533]"><Home size={20} fill="currentColor" /></span><h1 className="m-0 text-lg">Dashboard</h1></div><div className="flex gap-3 max-[720px]:w-full"><button className="flex min-w-[205px] flex-1 items-center justify-center gap-2 rounded-[22px] border border-[#ececf3] bg-white px-[20px] py-2 text-xs text-[#7e8293] max-[390px]:text-[10px]"><CalendarDays size={16} /> This Month <ChevronDown size={15} /></button><button className="flex min-w-[220px] flex-1 items-center justify-center gap-2 rounded-[22px] border-0 bg-[#32b888] px-6 py-2 text-xs font-bold text-white shadow-[0_10px_17px_#32b8883d] max-[390px]:text-[10px] max-[390px]:[&>svg]:hidden"><CloudUpload size={17} fill="currentColor" strokeWidth={2.5} /> Download Report</button></div></div><div className="rounded-[22px] bg-[#f1f1f6] p-5 max-[720px]:rounded-2xl max-[720px]:p-3"><section className="grid grid-cols-3 gap-5 max-[720px]:grid-cols-1 max-[720px]:gap-2.5">{metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</section><section className="mt-5 grid grid-cols-[minmax(0,1.45fr)_minmax(260px,.95fr)] gap-5 max-[1050px]:grid-cols-1 max-[1050px]:gap-3 max-[720px]:mt-3"><SessionsCard /><div className="grid grid-rows-[133px_minmax(0,1fr)] gap-5 max-[1050px]:grid-cols-2 max-[1050px]:grid-rows-1 max-[1050px]:gap-3 max-[720px]:grid-cols-1 max-[720px]:grid-rows-[auto_auto]"><UpgradeCard /><ConversionCard /></div></section></div></section></main>;
}
