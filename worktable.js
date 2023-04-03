    let jsonFromCsvFile = [];
        // 转换CSV为JSON数据
        const CSVToJSON = (data, csvTitleKbn, delimiter = ",") => {
            const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
            const hanleData = data.slice(data.indexOf("\n") + 1).split("\n");

            const json = hanleData.map(v => {
                const values = v.split(delimiter);
                return titles.reduce((obj, title, index) => ((obj[title] = values[index].split("\r")[0]), obj), {});
            });

            return json;
        };

        function importCsv() {
            
            const fileInput = document.getElementById("pdf-file-one");
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.readAsText(file);
            reader.addEventListener("load", ({ target: { result: csvText } }) => {
                // 将CSV文本转换为JSON数据
                jsonFromCsvFile = CSVToJSON(csvText);

                console.log("上传中");

                // 绘制echarts
                drawEcharts();

                console.log("上传结束");
                savePdf();
            });
        }

        // 下载pdf
        function savePdf() {
            var element = document.getElementById("pdf-box");
            var opt = {
                margin: 1,
                filename: "report.pdf",
                image: { type: "jpeg", quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
            };

            // New Promise-based usage:
            html2pdf().set(opt).from(element).toImg().save();
        }

        function drawEcharts() {
            let yList = [
                "Moment LAnkleAbAd",
                "Moment LAnkleFlex",
                "Moment LAnklePron",
                "Moment LAnkleRot",
                "Moment LHipAbAd",
                "Moment LHipFlex",
                "Moment LHipRot",
                "Moment LKneeAbAd",
                "Moment LKneeFlex",
                "Moment LKneeRot",
                "Moment RAnkleAbAd",
                "Moment RAnkleFlex",
                "Moment RAnklePron",
                "Moment RAnkleRot",
                "Moment RHipAbAd",
                "Moment RHipFlex",
                "Moment RHipRot",
                "Moment RKneeAbAd",
                "Moment RKneeFlex",
                "Moment RKneeRot",
                "Power LAnkleAbAd",
                "Power LAnkleFlex",
                "Power LAnklePron",
                "Power LAnkleRot",
                "Power LHipAbAd",
                "Power LHipFlex",
                "Power LHipRot",
                "Power LKneeAbAd",
                "Power LKneeFlex",
                "Power LKneeRot",
                "Power RAnkleAbAd",
                "Power RAnkleFlex",
                "Power RAnklePron",
                "Power RAnkleRot",
                "Power RHipAbAd",
                "Power RHipFlex",
                "Power RHipRot",
                "Power RKneeAbAd",
                "Power RKneeFlex",
                "Power RKneeRot"
            ];
            let list1 = document.getElementsByClassName("common-echarts");
            let timekeyValue = jsonFromCsvFile.map((item, index) => item["Timekey"]);

            for (let i = 0; i < list1.length; i++) {
                var myChart = echarts.init(list1[i]);
                var option;
                let yKey = yList[i];

                let datas = [];
                let arr = [];
                jsonFromCsvFile.map((d,index) => {
                    arr.push([index % 120, d[yKey]])
                    if((index + 1) % 120 == 0){
                        datas.push({
                            data: arr,
                            symbol: "none",
                            smooth: true,
                            type: "line",
                            color:'#5470c6'
                        })
                        arr = [];
                    }
                })


                option = {
                    legend: {
                        right: 400
                    },
                    yAxis: {
                        type:'value'
                    },
                    xAxis: {
                        type:'value'
                    },
                    title: {
                        left: 'center',
                        top:40,
                        text: yKey,
                    },
                    series: datas,
                    animation: false
                };

                option && myChart.setOption(option);
            }
        }