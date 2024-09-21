import type { Config } from '@jest/types'


const config: Config.InitialOptions = {
    moduleFileExtensions: ['ts', 'js'],
    rootDir: '.',
    testEnvironment: 'node',
    preset: 'ts-jest',
    transform: {},
    verbose: true,
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageDirectory: "coverage_unit"
}


export default config;