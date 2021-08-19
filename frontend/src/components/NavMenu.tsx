import React from "react";

import { Dropdown, Navigation } from "components";
import { intl } from "locale";
import { Link } from "react-router-dom";
import {
	Book,
	DeviceDesktop,
	Home,
	Lock,
	Settings,
	Shield,
	Users,
} from "tabler-icons-react";

function NavMenu() {
	return (
		<Navigation.Menu
			theme="light"
			className="mb-3"
			items={[
				{
					title: intl.formatMessage({
						id: "dashboard.title",
						defaultMessage: "Dashboard",
					}),
					icon: <Home />,
					to: "/",
				},
				{
					title: intl.formatMessage({
						id: "hosts.title",
						defaultMessage: "Hosts",
					}),
					icon: <DeviceDesktop />,
					to: "/hosts",
				},
				{
					title: intl.formatMessage({
						id: "accesslists.title",
						defaultMessage: "Access Lists",
					}),
					icon: <Lock />,
					to: "/access-lists",
				},
				{
					title: "SSL",
					icon: <Shield />,
					dropdownItems: [
						<Dropdown.Item key="ssl-certificates">
							<Link to="/ssl/certificates" role="button" aria-expanded="false">
								<span className="nav-link-title">
									{intl.formatMessage({
										id: "certificates.title",
										defaultMessage: "Certificates",
									})}
								</span>
							</Link>
						</Dropdown.Item>,
						<Dropdown.Item key="ssl-authorities">
							<Link to="/ssl/authorities" role="button" aria-expanded="false">
								<span className="nav-link-title">
									{intl.formatMessage({
										id: "cert_authorities.title",
										defaultMessage: "Certificate Authorities",
									})}
								</span>
							</Link>
						</Dropdown.Item>,
					],
				},
				{
					title: intl.formatMessage({
						id: "auditlog.title",
						defaultMessage: "Audit Log",
					}),
					icon: <Book />,
					to: "/audit-log",
				},
				{
					title: intl.formatMessage({
						id: "users.title",
						defaultMessage: "Users",
					}),
					icon: <Users />,
					to: "/users",
				},
				{
					title: intl.formatMessage({
						id: "settings.title",
						defaultMessage: "Settings",
					}),
					icon: <Settings />,
					to: "/settings",
				},
			]}
		/>
	);
}

export { NavMenu };