process.env.NODE_ENV = 'test'
const { expect } = require('chai');
const app = require('../db/app');
const supertest = require('supertest')(app)
const connection = require('../db/connection')

describe('', () => {