import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
import { RiDashboardFill } from 'react-icons/ri';
import { IoFastFoodSharp } from 'react-icons/io5';
import { MdTableRestaurant } from 'react-icons/md';
import { BsMenuButtonWideFill } from "react-icons/bs";

import { MdInventory2 } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { PiCalculatorBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { TbLogs } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaChalkboardUser } from "react-icons/fa6";

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar mt-[60px] fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-1">

                            <li className="nav-item">
                                <NavLink to="/" className="group">
                                    <div className="flex items-center">
                                        <RiDashboardFill color='black' className="group-hover:!text-primary shrink-0 " />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Dashboard')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'all-orders' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('all-orders')}>
                                    <div className="flex items-center">
                                        <IoFastFoodSharp color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Orders & Billing')}</span>
                                    </div>

                                    <div className={currentMenu !== 'all-orders' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'all-orders' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/all-orders" className={'sidebar-sub-text'}>{t('All Orders')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/kot-orders" className={'sidebar-sub-text'}>{t('KOT')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/online-orders" className={'sidebar-sub-text'}>{t('Online Orders')}</NavLink>
                                        </li>

                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'running-orders' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('running-orders')}>
                                    <div className="flex items-center">
                                        <MdTableRestaurant color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Tables')}</span>
                                    </div>
                                    <div className={currentMenu !== 'running-orders' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'running-orders' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/running-orders" className={'sidebar-sub-text'}>{t('Running Orders')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/table-management" className={'sidebar-sub-text'}>{t('Table Management')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'manu-management' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('manu-management')}>
                                    <div className="flex items-center">
                                        <BsMenuButtonWideFill color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Menu Management')}</span>
                                    </div>
                                    <div className={currentMenu !== 'manu-management' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'manu-management' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/manu-management" className={'sidebar-sub-text'}>{t('Menu & Discount')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/online-menu" className={'sidebar-sub-text'}>{t('Online Menu')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'purchase-order' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('purchase-order')}>
                                    <div className="flex items-center">
                                        <MdInventory2 color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Inventory')}</span>
                                    </div>
                                    <div className={currentMenu !== 'purchase-order' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'purchase-order' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">

                                        <li>
                                            <NavLink to="/purchase-order" className={'sidebar-sub-text'}>Purchase Order</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/stock-purchase" className={'sidebar-sub-text'}>Stock Purchase</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/raw-meterials" className={'sidebar-sub-text'}>Raw Meterials</NavLink>
                                        </li>

                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'customers' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('customers')}>
                                    <div className="flex items-center">
                                        <FaUsersLine color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('CRM')}</span>
                                    </div>
                                    <div className={currentMenu !== 'customers' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>
                                <AnimateHeight duration={300} height={currentMenu === 'customers' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/customers" className={'sidebar-sub-text'}>Customers</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/feedbacks" className={'sidebar-sub-text'}>Feedbacks</NavLink>
                                        </li>

                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'employee-management' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('employee-management')}>
                                    <div className="flex items-center">
                                        <FaChalkboardUser color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Payroll')}</span>
                                    </div>
                                    <div className={currentMenu !== 'employee-management' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>




                                <AnimateHeight duration={300} height={currentMenu === 'employee-management' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/employee-management" className={'sidebar-sub-text'}>Employee Management</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/reports" className={'sidebar-sub-text'}>Reports</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/device-configuration" className={'sidebar-sub-text'}>Device Configuration</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'accounting' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('accounting')}>
                                    <div className="flex items-center">
                                        <PiCalculatorBold color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Accounting')}</span>
                                    </div>
                                    <div className={currentMenu !== 'accounting' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'accounting' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/accounting" className={'sidebar-sub-text'}>Online Orders</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/gst-information" className={'sidebar-sub-text'}>GST Information's</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/bank-details" className={'sidebar-sub-text'}>Bank Details</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/payment-gateway" className={'sidebar-sub-text'}>Payment Gateway</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'day-summary' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('day-summary')}>
                                    <div className="flex items-center">
                                        <TbReport color='black'
                                            className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Reports')}</span>
                                    </div>
                                    <div className={currentMenu !== 'day-summary' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>


                                <AnimateHeight duration={300} height={currentMenu === 'day-summary' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/day-summary" className={'sidebar-sub-text'}>Day Summary</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/other-reports" className={'sidebar-sub-text'}>Other Reports</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/online-reports" className={'sidebar-sub-text'}>Online Reports</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/user-management" className={'sidebar-sub-text'}> User Management</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/market-place" className="group">
                                    <div className="flex items-center">
                                        <CgWebsite color='black' className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Marketplace')}</span>
                                    </div>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/user-logs" className="group">
                                    <div className="flex items-center">
                                        <TbLogs color='black' className="group-hover:!text-primary shrink-0" />
                                        <span className="sidebar-text ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t(' User Logs')}</span>
                                    </div>
                                </NavLink>
                            </li>

                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
