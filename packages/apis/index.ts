import axios, { AxiosInstance } from 'axios';

export const Instance = (baseURL: string, timeout: number, headers?: any) => axios.create({
  baseURL,
  timeout
})

export class Api {
  private axios: AxiosInstance;
  constructor(baseUrl: string, timeout: number) {
    this.axios = Instance(baseUrl, timeout)
  }

  public async get(url: string, params?: any) {
    const { data } = await this.axios({
      url,
      method: 'GET',
      params: params ?? ''
    })
    return data
  }
  public async post() {

  }
  public async delete() {

  }
}