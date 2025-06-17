import {
 
  ChartArea,
  ChevronUp,
  Home,
  Inbox,
  LogOut,
  NotebookPen,
  Settings,
  Target,
  User,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Roboto } from 'next/font/google'; // Import Roboto

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  // SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


// Configure Roboto
const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
  display: 'swap',
});

// Menu items.
const entries = [
  {
    title: "DPR Entry (ADC)",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "DPR Entry (C4)",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "DPR Entry (KD)",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Pallet Entry",
    url: "#",
    icon: NotebookPen,
  },
];

const planning = [
  {
    title: "Production Management",
    url: "/production",
    icon: Target,
  },
  {
    title: "Plan Uploader",
    url: "#",
    icon: Inbox,
  },
];

const dashboard = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];

const settings = [
  {
    title: "Product Master",
    url: "#",
    icon: Settings,
  },
  {
    title: "Kanban Master",
    url: "#",
    icon: Settings,
  },
  {
    title: "Pallet Master",
    url: "#",
    icon: Settings,
  },
  {
    title: "Locator Master",
    url: "#",
    icon: Settings,
  },
    {
    title: "User Master",
    url: "#",
    icon: Settings,
  },
    {
    title: "Preference Master",
    url: "#",
    icon: Settings,
  },
    {
    title: "Shift Master",
    url: "#",
    icon: Settings,
  },
    {
    title: "Dpr Master",
    url: "#",
    icon: Settings,
  },
];

const reports = [
  {
    title: "MPR (ADC)",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "MPR (C4)",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "MPR (KD)",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "KD Pallet",
    url: "#",
    icon: ChartArea,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon" className={`group ${roboto.className}`}>
      {/* Header */}
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="mr-1"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Separator */}
      <hr />

      {/* Content Sidebar */}
      <SidebarContent>

        {/* Home and Dashboard*/}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <LayoutDashboard /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span className="text-[12px] tracking-wide	">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Planning*/}
        <SidebarGroup>
          <SidebarGroupLabel>Planning</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <NotepadText /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {planning.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span className="text-[12px] tracking-wide	 style={{ fontWeight: 300 }}">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Entries*/}
        <SidebarGroup>
          <SidebarGroupLabel>Entries</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {entries.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span className="text-[12px] tracking-wide	 style={{ fontWeight: 300 }}">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

                {/* Reports*/}
        <SidebarGroup>
          <SidebarGroupLabel>Reports</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <ChartPie /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {reports.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span className="text-[12px] tracking-wide	 style={{ fontWeight: 300 }}">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings*/}
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <UserRoundCog /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-1" />
                      <span className="text-[12px] tracking-wide	 style={{ fontWeight: 300 }}">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      

      {/* Foopter */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Image
                    src="/assets/images/johnell.jpg"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded-full mr-1 cursor-pointer"
                  />
                  Johnell Empuerto <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-center">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="h-[1.2rem] w-[1.2rem] mr-2 " />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Setting
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  className="cursor-pointer"
                >
                  <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
