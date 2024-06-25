import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
import store from './store';
import axios from 'axios';
import Index from './nikhil/Invalid/Index';
import Activation from './nikhil/Activation';
import PageLoader from './nikhil/PageLoader';


function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);


    useEffect(() => {
        checkRestaurant();
    }, [])

    const [isLoading, setIsLoading] = useState(1);

    const [valid, setValid] = useState(0);
    const [response, setResponse] = useState<any>(null);

    const checkRestaurant = async () => {
        setIsLoading(1)
        try {
            const response = await axios({
                method: 'get',
                url: window.location.origin + '/api/check-restaurant',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setResponse(response.data)
            if (response.data.status == "success" && response.data.action == "login") {
                setValid(1)
            }
            else if (response.data.status == "error" && response.data[0].action == "error") setValid(2)
            else if (response.data.status == "error" && response.data[0].action == "activation") setValid(3)
        } catch (error) {
            console.log(error)
            if (error.response.status == 500 && error.response.data.message == "Tenant could not be identified on domain not6.onetapdine.com") {
                setValid(2)
                setResponse([{ title: "Invalid", message: 'Invalid Attempt' }]);
            }
            // console.log(window.location.host)
        } finally {
            setIsLoading(0)
        }
    }



    return (
        <>
            {isLoading ? (
                <PageLoader />
            ) :
                valid == 1 ? (
                    <div
                        className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${themeConfig.rtlClass
                            } main-section antialiased relative font-nunito text-sm font-normal`}
                    >
                        {children}
                    </div>
                ) :
                    valid == 2 ? <Index message={response} />
                        :
                        valid == 3 ? <Activation response={response[0]} />
                            : null
            }
        </>
    );
}

export default App;
