import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
	mode: "development",
	entry: {
		index: ["./src/index.ts", "./src/hitokoto.ts"],
		sw: './src/sw.ts',
	},
	output: {
		filename: "[name].js",
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
	plugins: [new MiniCssExtractPlugin()],
	devtool: "source-map",
};

export default config;
