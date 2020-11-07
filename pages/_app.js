import '../styles/globals.css'
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "../context/AuthContext";
import { SheetsProvider } from '../context/SheetsContext';
import { RepoProvider } from "../context/RepoContext";
import { LeaderboardProvider } from "../context/LeaderboardContext";

import App from 'next/app'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <SheetsProvider>
          <RepoProvider>
            <LeaderboardProvider>
              <div className="App">
                <ToastContainer
                  className="toast-container"
                  toastClassName="toast"
                  progressClassName="toast-progress"
                />
              </div>
              <Component {...pageProps} />
            </LeaderboardProvider>
          </RepoProvider>
        </SheetsProvider>
      </AuthProvider>
    );
  }
}

export default MyApp
