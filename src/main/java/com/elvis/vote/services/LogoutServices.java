package com.elvis.vote.services;

public interface LogoutServices {
    /**
     * 手动注销
     */
    public void logout();

    /**
     * 超时注销
     */
    public void timeoutLogout();
}
