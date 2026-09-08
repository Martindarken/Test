'use client'

import { useState } from 'react'
import { LayoutDashboard, Network, Lightbulb, FileText, ShieldCheck, Settings, Search, Bell, ChevronDown, ArrowUpRight, Sparkles, DollarSign, Zap, CircleAlert, CheckCircle2 } from 'lucide-react'

const spend = [
  ['Digital Products', 520, '+31%', 42], ['Customer Solutions', 340, '+18%', 27], ['IT', 180, '+4%', 15], ['R&D', 120, '+7%', 10], ['Other', 80, '-2%', 6]
]
const opportunities = [
  ['Route low-complexity traffic to GPT-5-mini', 'Customer AI', '€42,180', 'High'],
  ['Optimize oversized system prompts', 'Support AI', '€31,400', 'High'],
  ['Right-size GPU inference cluster', 'ML Platform', '€28,700', 'Medium'],
  ['Cache repeated requests', 'Customer AI', '€19,240', 'High'],
]

export default function Home() {
  const [active, setActive] = useState('Overview')
  const [period, setPeriod] = useState('September 2026')
  const [selected, setSelected] = useState<string | null>(null)
  const nav = [
    ['Overview', LayoutDashboard], ['Explore spend', Search], ['AI hierarchy', Network], ['Optimization', Lightbulb], ['Reports', FileText], ['Governance', ShieldCheck]
  ] as const
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="brandMark">✦</div><div><b>AI FinOps</b><span>Spend intelligence</span></div></div>
      <div className="workspace"><span>WORKSPACE</span><button>Acme Corporation <ChevronDown size={14}/></button></div>
      <nav>{nav.map(([name, Icon]) => <button key={name} onClick={() => setActive(name)} className={active === name ? 'active' : ''}><Icon size={18}/><span>{name}</span>{name === 'Optimization' && <i>27</i>}</button>)}</nav>
      <div className="sidebarBottom"><button><Settings size={18}/>Settings</button><div className="user"><div className="avatar">MK</div><div><b>Martin</b><span>Admin</span></div><ChevronDown size={14}/></div></div>
    </aside>
    <main>
      <header><div><div className="eyebrow">{active.toUpperCase()}</div><h1>AI Spend Command Center</h1><p>Enterprise-wide visibility into AI cost, usage and savings.</p></div><div className="headerActions"><button className="iconBtn"><Bell size={18}/><em></em></button><button className="period" onClick={() => setPeriod(period === 'September 2026' ? 'August 2026' : 'September 2026')}>{period}<ChevronDown size={15}/></button></div></header>
      <section className="metrics">
        <Metric label="AI SPEND" value="€1.24M" delta="+14.2%" icon={<DollarSign size={17}/>} />
        <Metric label="FORECAST · NEXT 30 DAYS" value="€1.61M" delta="+30.0%" icon={<Zap size={17}/>} />
        <Metric label="SAVINGS OPPORTUNITY" value="€183K" delta="14.8% of spend" icon={<Sparkles size={17}/>} />
        <Metric label="UNALLOCATED SPEND" value="7.4%" delta="↓ 2.1pp" icon={<Network size={17}/>} />
      </section>
      <section className="grid2">
        <div className="card"><div className="cardHead"><div><h2>Where is the money going?</h2><span>Monthly AI spend by business unit</span></div><button className="ghost">View details <ArrowUpRight size={14}/></button></div><div className="bars">{spend.map(([name, amount, delta, pct]) => <button className="barRow" key={name} onClick={() => setSelected(String(name))}><div className="barLabel"><span>{name}</span><b>€{amount}K</b></div><div className="barTrack"><div style={{width:`${pct * 2}%`}}></div></div><span className={String(delta).startsWith('-') ? 'down' : 'up'}>{delta}</span></button>)}</div></div>
        <div className="card"><div className="cardHead"><div><h2>AI spend trend</h2><span>Last 6 months</span></div><span className="badge green">Healthy</span></div><div className="chart"><div className="chartGrid"></div><svg viewBox="0 0 600 190" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopOpacity=".22"/><stop offset="1" stopOpacity="0"/></linearGradient></defs><path d="M0 150 C70 145 70 130 120 135 S180 110 220 115 S270 105 310 100 S370 80 410 87 S470 62 510 68 S560 42 600 48 L600 190 L0 190Z" fill="url(#fill)"/><path d="M0 150 C70 145 70 130 120 135 S180 110 220 115 S270 105 310 100 S370 80 410 87 S470 62 510 68 S560 42 600 48" fill="none" stroke="currentColor" strokeWidth="3"/></svg><div className="axis"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div></div></div>
      </section>
      <section className="card opportunities"><div className="cardHead"><div><h2><Sparkles size={18}/> Savings opportunities</h2><span>Actions ranked by estimated monthly impact</span></div><button className="ghost">See all 27 <ArrowUpRight size={14}/></button></div><div className="opList">{opportunities.map(([title, app, saving, confidence]) => <button className="op" key={title} onClick={() => setSelected(title)}><div className="opIcon"><Lightbulb size={17}/></div><div className="opMain"><b>{title}</b><span>{app} · {confidence} confidence</span></div><div className="saving"><b>{saving}</b><span>/ month</span></div><ArrowUpRight size={16} className="muted"/></button>)}</div></section>
      <section className="bottomGrid"><div className="card"><div className="cardHead"><div><h2>AI landscape</h2><span>Connected infrastructure</span></div></div><div className="landscape"><Node title="Azure OpenAI" value="€684K" sub="55% of spend"/><div className="connector"/><Node title="OpenAI API" value="€294K" sub="24% of spend"/><div className="connector"/><Node title="AWS Bedrock" value="€168K" sub="14% of spend"/><div className="connector"/><Node title="Other" value="€94K" sub="7% of spend"/></div></div><div className="card"><div className="cardHead"><div><h2>Governance</h2><span>What needs attention</span></div></div><div className="alerts"><Alert icon={<CircleAlert/>} title="€91K unallocated" text="12 workloads have no owner"/><Alert icon={<CircleAlert/>} title="3 policy violations" text="Production models outside approved policy"/><Alert icon={<CheckCircle2/>} title="All connectors healthy" text="Last sync 8 minutes ago" good/></div></div></section>
      {selected && <div className="drawer" onClick={() => setSelected(null)}><div className="drawerInner" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)}>×</button><div className="eyebrow">DETAIL</div><h2>{selected}</h2><p>AI cost intelligence detail view</p><div className="detailMetric"><span>Current monthly impact</span><b>{selected.includes('GPT') ? '€42,180' : '€183K'}</b></div><div className="recommend"><Sparkles size={18}/><div><b>Recommended action</b><p>Review this workload against model efficiency, token volume, ownership and business value before implementing the change.</p></div></div><button className="primary" onClick={() => setSelected(null)}>Mark for review</button></div></div>}
    </main>
  </div>
}
function Metric({label,value,delta,icon}:{label:string,value:string,delta:string,icon:React.ReactNode}) { return <div className="metric"><div className="metricTop"><span>{label}</span><div>{icon}</div></div><strong>{value}</strong><small>{delta}</small></div> }
function Node({title,value,sub}:{title:string,value:string,sub:string}) { return <div className="node"><span>{title}</span><b>{value}</b><small>{sub}</small></div> }
function Alert({icon,title,text,good}:{icon:React.ReactNode,title:string,text:string,good?:boolean}) { return <div className="alert"><div className={good ? 'alertIcon good' : 'alertIcon'}>{icon}</div><div><b>{title}</b><span>{text}</span></div></div> }