import { IApprovalElement } from "interfaces/IApprovalElement";
// import {
//     AiOutlineFileProtect,
//     AiOutlineHome,
//     AiOutlineWallet,
//   } from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
export const statusOfInvoiceList = [
  {
    _id: "Pending",
    name: "Pending",
    color: "red",
  },
  {
    _id: "In Progress",
    name: "In Progress",
    color: "yellow-500",
  },
  {
    _id: "Completed",
    name: "Completed",
    color: "green",
  },
];

export const supportingDocumentList = [
  {
    _id: "purchaseOrderDocument",
    name: "Purchase Order",
  },
  {
    _id: "grnDocument",
    name: "GRN",
  },
  {
    _id: "srnDocument",
    name: "SRN",
  },
];

export const staticApprovalElementList: IApprovalElement[] = [
  {
    title: "Program",
    value: "Vendor Finance",
    isMandatory: true,
  },
  {
    title: "Invoice Date",
    value: "09-09-2022",
    isMandatory: true,
  },
  {
    title: "Supporting Documents",
    value: "Purchase Order",
    isMandatory: false,
    fileList: [{ name: "PurchaseOrder.pdf" }],
  },
  {
    title: "Buyer Name",
    value: "CGM Inclusive Ltd.",
    isMandatory: true,
  },
  {
    title: "Invoice Due Date",
    value: "07-04-2022",
    isMandatory: true,
  },
  {
    title: "Supporting Documents",
    isMandatory: false,
    fileList: [{ name: "Invoice1568942.pdf" }],
  },
  {
    title: "Seller Name",
    value: "Ecorp Pvt Ltd.",
    isMandatory: true,
  },
  {
    title: "Emway Bill Date",
    value: "XXXXXXX",
    isMandatory: false,
  },
  {
    title: "Supporting Documents",
    isMandatory: false,
    fileList: [{ name: "Bill10121.pdf" }],
  },
  {
    title: "Product Type",
    value: "Service",
    isMandatory: true,
  },
  {
    title: "Emway Bill Date",
    value: "10-01-2022",
    isMandatory: false,
  },
  {
    title: "Comments",
    value: "Lorem Ipsum",
    isMandatory: false,
  },
  {
    title: "Invoice Number",
    value: "121001",
    isMandatory: true,
  },
  {
    title: "GRN/SRN Number",
    value: "XXXXXXX",
    isMandatory: false,
  },
  {
    title: "Invoice Amount",
    value: "$",
    isMandatory: true,
  },
  {
    title: "GRN/SRN date",
    value: "12-01-2022",
    isMandatory: true,
  },
];

export const DashboardArray = [
  "My Invoices",
  "My Wallet",
  "Repayment Statement",
];
export const spportArray = [
  "Talk With Us ",
  "Support Ticket",
  "Refer And Earn",
];
export const profilearray = [
  "My Profile",
  "Manage Bank Accounts",
  "Notifications",
  "Account Closing",
];
export const NavBarData = [
  {
    label: "Dashboard",
    link: "/dashboard",
    navPanelValue: "dashboard",
  },
  {
    label: "My Invoice",
    link: "/my-invoice",
    navPanelValue: "my-invoice",
  },
  {
    label: "My Wallet",
    link: "/my-wallet",
    navPanelValue: "my-wallet",
  },
  {
    label: "Repayment Statement",
    link: "/repayment-statement",
    navPanelValue: "repayment-statement",
  },
];
