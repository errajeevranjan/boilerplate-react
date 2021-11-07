import {
	Box,
	CssBaseline,
	Divider,
	FormControlLabel,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { MdChevronRight, MdInbox, MdMail, MdMenu } from "react-icons/md";
import { useAppDispatch } from "reduxStore";
import { toggleDarkModeReducer } from "reduxStore/app/appSlice";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { AppBar, Drawer, DrawerHeader } from "./NavigationComponents";

type ReactChildren = {
	children: React.ReactNode;
};

const Navigation = ({ children }: ReactChildren) => {
	const dispatch = useAppDispatch();

	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' open={open} color='inherit'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: "36px",
							...(open && { display: "none" }),
						}}>
						<MdMenu />
					</IconButton>
					<Typography
						sx={{
							...(open && { display: "none" }),
						}}
						variant='h6'
						noWrap
						component='div'>
						Brand Name
					</Typography>
					<FormControlLabel
						control={
							<DarkModeSwitch
								sx={{ m: 1 }}
								onClick={() => dispatch(toggleDarkModeReducer())}
							/>
						}
						label={""}
					/>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<Typography variant='h6' noWrap component='div'>
						Brand Name
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<MdChevronRight />
						) : (
							<MdChevronRight />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <MdInbox /> : <MdMail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <MdInbox /> : <MdMail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3, overflow: "hidden" }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};
export default Navigation;
