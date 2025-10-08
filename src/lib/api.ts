import ROUTES from "@/constants/routes";
import { IAccount } from "@/database/account.model";
import { IUser } from "@/database/user.model";

import { fetchHandler } from "./handlers/fetch";
import { APIResponse } from "@/types/global";

export const api = {
  auth: {
    oAuthSignIn: ({ user, provider, providerAccountId }: any) =>
      fetchHandler(`/auth/signin-with-oauth`, {
        method: "POST",
        data: { user, provider, providerAccountId },
      }),
  },
  users: {
    getAll: () => fetchHandler("/users"),
    getById: (id: string) => fetchHandler(`/users/${id}`),
    getByEmail: (email: string) =>
      fetchHandler("/users/email", {
        method: "POST",
        data: { email },
      }),
    create: (userData: Partial<IUser>) =>
      fetchHandler("/users", {
        method: "POST",
        data: userData,
      }),
    update: (id: string, userData: Partial<IUser>) =>
      fetchHandler(`/users/${id}`, {
        method: "PUT",
        data: userData,
      }),
    delete: (id: string) => fetchHandler(`/users/${id}`, { method: "DELETE" }),
  },
  accounts: {
    getAll: () => fetchHandler("/accounts"),
    getById: (id: string) => fetchHandler(`/accounts/${id}`),
    getByProvider: (providerAccountId: string) =>
      fetchHandler("/accounts/provider", {
        method: "POST",
        data: { providerAccountId },
      }),
    create: (accountData: Partial<IAccount>) =>
      fetchHandler("/accounts", {
        method: "POST",
        data: accountData,
      }),
    update: (id: string, accountData: Partial<IAccount>) =>
      fetchHandler(`/accounts/${id}`, {
        method: "PUT",
        data: accountData,
      }),
    delete: (id: string) =>
      fetchHandler(`/accounts/${id}`, { method: "DELETE" }),
  },
  ai: {
    getAnswer: (
      question: string,
      content: string,
      userAnswer?: string
    ): APIResponse<string> =>
      fetchHandler("/ai/answers", {
        method: "POST",
        data: { question, content, userAnswer },
      }),
  },
};
