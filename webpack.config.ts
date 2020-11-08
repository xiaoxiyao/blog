import path from "path";
import WorkboxPlugin from "workbox-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
	mode: "development",
	entry: ["./src/index.ts", "./src/hitokoto.ts"],
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "static"),
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { sourceMap: true }
					},
					{
						loader: "css-loader",
						options: { sourceMap: true }
					},
					{
						loader: "postcss-loader",
						options: { sourceMap: true }
					},
					{
						loader: "less-loader",
						options: { sourceMap: true }
					},
				],
			},
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new WorkboxPlugin.GenerateSW(), new MiniCssExtractPlugin(),],
	devtool: "source-map",
};

export default config;
