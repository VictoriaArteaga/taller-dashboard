import {
	Bell,
	BarChart3,
	CalendarDays,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	CircleHelp,
	CloudDownload,
	Home,
	Inbox,
	LayoutDashboard,
	LifeBuoy,
	MessageCircle,
	Package,
	Search,
	ShoppingBag,
	ShoppingCart,
	SlidersHorizontal,
	Tag,
	Users,
} from "lucide-react";

const navigation = [
	{ label: "Dashboard", icon: LayoutDashboard, active: true },
	{ label: "Orders", icon: ShoppingBag },
	{ label: "Products", icon: Package },
	{ label: "Analytics", icon: BarChart3 },
	{ label: "Marketing", icon: Tag },
	{ label: "Messages", icon: MessageCircle, badge: "25" },
];

const integrations = [
	{ label: "Jira", icon: SlidersHorizontal, tone: "jira" },
	{ label: "Slack", icon: MessageCircle, tone: "slack" },
	{ label: "Intercom", icon: Inbox, tone: "intercom" },
];

const metrics = [
	{ label: "Total Sales", value: "263k", change: "15.6%", icon: ShoppingCart, direction: "up" },
	{ label: "Total Visitors", value: "35k", change: "6.2%", icon: Users, direction: "down" },
	{ label: "Total Orders", value: "165k", change: "3.5%", icon: ShoppingBag, direction: "up" },
];

function Avatar() {
	return (
		<span className="avatar" aria-label="Lay profile">
			<span className="avatar-hair" />
			<span className="avatar-face"><span className="avatar-beard" /></span>
		</span>
	);
}

function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="brand"><span className="brand-mark">R</span><span>flex</span></div>
			<p className="sidebar-label">Menu</p>
			<nav className="primary-nav" aria-label="Main navigation">
				{navigation.map(({ label, icon: Icon, active, badge }) => (
					<button className={`nav-item${active ? " active" : ""}`} key={label}>
						<Icon size={18} strokeWidth={active ? 2.6 : 2.2} />
						<span>{label}</span>
						{badge ? <small>{badge}</small> : label !== "Dashboard" && label !== "Analytics" ? <ChevronDown className="nav-chevron" size={14} /> : null}
					</button>
				))}
			</nav>
			<p className="sidebar-label integrations-label">Integrations</p>
			<nav className="primary-nav" aria-label="Integrations">
				{integrations.map(({ label, icon: Icon, tone }) => (
					<button className="nav-item integration-item" key={label}>
						<Icon className={`integration-icon ${tone}`} size={18} />
						<span>{label}</span>
					</button>
				))}
			</nav>
			<button className="logout"><LifeBuoy size={18} /><span>Logout</span></button>
		</aside>
	);
}

function MetricCard({ label, value, change, icon: Icon, direction }: (typeof metrics)[number]) {
	return (
		<article className="metric-card">
			<span className="metric-icon"><Icon size={19} /></span>
			<div>
				<p>{label}</p>
				<div className="metric-value-row"><strong>{value}</strong><span className={`change ${direction}`}><span>{direction === "up" ? "↑" : "↓"}</span> {change}</span></div>
			</div>
		</article>
	);
}

function SessionsCard() {
	return (
		<article className="panel sessions-card">
			<div className="panel-heading"><div><p className="eyebrow">Online Store Sessions</p><div className="visitor-line"><span className="metric-icon"><Users size={18} /></span><div><span className="muted-label">Visitors</span><strong>68</strong></div></div></div><button className="outline-button">View Report</button></div>
			<div className="session-stats"><span className="positive">↑ 15.6%</span><span className="blue-stat">26</span><span className="negative">↓ 1.6%</span></div>
			<div className="rule" />
			<div className="chart-heading"><p className="eyebrow">Sessions Over Time</p><button className="month-select"><CalendarDays size={14} /> February <ChevronDown size={14} /></button></div>
			<div className="chart-wrap">
				<div className="y-axis"><span>15</span><span>10</span><span>5</span><span>0</span></div>
				<svg className="line-chart" viewBox="0 0 420 145" role="img" aria-label="Sessions over time chart">
					<defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7770ed" stopOpacity=".18" /><stop offset="1" stopColor="#7770ed" stopOpacity="0" /></linearGradient></defs>
					<path className="chart-grid" d="M0 16H420 M0 57H420 M0 98H420 M0 139H420" />
					<path className="chart-area" d="M0 139 C31 136 31 83 61 83 S95 127 125 127 S159 129 181 98 S216 60 242 90 S275 141 302 112 S332 16 360 20 S393 18 420 17 L420 145 L0 145Z" />
					<path className="chart-line" d="M0 139 C31 136 31 83 61 83 S95 127 125 127 S159 129 181 98 S216 60 242 90 S275 141 302 112 S332 16 360 20 S393 18 420 17" />
				</svg>
			</div>
			<div className="pagination"><button aria-label="Previous week"><ChevronLeft size={16} /></button><span className="selected-page">21</span><span>22</span><span>23</span><span>24</span><span>25</span><button aria-label="Next week"><ChevronRight size={16} /></button></div>
		</article>
	);
}

function UpgradeCard() {
	return <article className="upgrade-card"><div><p>Need More Stats?</p><span>Upgrade to pro for added benefits.</span><button><CircleHelp size={15} /> Go Pro Now</button></div><div className="rocket-art" aria-hidden="true"><span>↗</span><span>↑</span><span>☁</span></div></article>;
}

function ConversionCard() {
	return <article className="panel conversion-card"><p className="eyebrow">Conversion</p><div className="gauge"><div className="gauge-inner"><strong>58,19%</strong><span>↑ 3.5%</span></div></div><div className="conversion-footer"><span><b>↙</b> Income <strong>$542,317</strong></span><span><b>↗</b> Expenses <strong>$497,456</strong></span></div></article>;
}

export default function Dashboard() {
	return (
		<main className="app-shell">
			<Sidebar />
			<section className="dashboard-content">
				<header className="topbar"><button className="back-button" aria-label="Back"><ChevronLeft size={18} /></button><label className="search-box"><Search size={18} /><input aria-label="Search" placeholder="Search" /></label><div className="profile-tools"><button className="icon-button notification" aria-label="Notifications"><Bell size={18} /><span /></button><div className="balance"><span>Your Balance</span><strong>$5,456</strong></div><Avatar /><div className="greeting">Hi, Lay</div><ChevronDown size={15} /></div></header>
				<div className="content-heading"><div className="title-wrap"><span className="title-icon"><Home size={20} fill="currentColor" /></span><h1>Dashboard</h1></div><div className="heading-actions"><button className="period-select"><CalendarDays size={16} /> This Month <ChevronDown size={15} /></button><button className="download-button"><CloudDownload size={17} /> Download Report</button></div></div>
				<div className="dashboard-board">
					<section className="metrics-grid">{metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</section>
					<section className="main-grid"><SessionsCard /><div className="right-column"><UpgradeCard /><ConversionCard /></div></section>
				</div>
			</section>
		</main>
	);
}
