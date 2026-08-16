import { authClient } from "@/lib/auth-client";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Dropdown, Label} from "@heroui/react";

export function CustomAvater( {user}) {
     const handleSignOut = async () => {
        await authClient.signOut();
      }
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover >
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
              />
              <Avatar.Fallback delayMs={600}>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name ? user.name.split(' ')[0] : 'User'}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          {/* <Dropdown.Item id="settings" textValue="Settings">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Settings</Label>
              <Gear className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item> */}
          {/* <Dropdown.Item id="new-project" textValue="New project">
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Create Team</Label>
              <Persons className="size-3.5 text-muted" />
            </div>
          </Dropdown.Item> */}
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div onClick={handleSignOut} className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}