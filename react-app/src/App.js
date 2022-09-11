import React from "react";
import LeftMenu from "./components/LeftMenu";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Maps from "./components/Maps";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import {Layout, Menu} from "antd";

export default function App() {
    return (
        <>
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" />
                </Header>
                <Layout>
                    <Sider height={"100%"} width={"300px"}>
                        <LeftMenu/>
                    </Sider>
                    <Layout>
                        <Content>
                            <Routes>
                                <Route path="/home" element={<Home />}/>
                                <Route path="/search" element={<Search />}/>
                                <Route path="/maps" element={<Maps />}/>
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}