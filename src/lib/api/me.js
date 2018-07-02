// @flow
import axios from 'lib/defaultClient';

export const listCategories = (): Promise<*> => axios.get('/me/categories');