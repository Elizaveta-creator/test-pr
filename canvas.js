var canvas  = document.getElementById("content__info-impressions-MyChart");
        var chart = canvas.getContext("2d");

        function drawDChart(canvas)
        {

            this.x , this.y , this.radius , this.lineWidth , this.strockStyle , this.from , this.to = null;
            this.set = function( x, y, radius, from, to, lineWidth, strockStyle)
            {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.from=from;
                this.to= to;
                this.lineWidth = lineWidth;
                this.strockStyle = strockStyle; 
            }

            this.draw = function(data)
            {
                canvas.beginPath();
                canvas.lineWidth = this.lineWidth;
                canvas.strokeStyle = this.strockStyle;
                canvas.arc(this.x , this.y , this.radius , this.from , this.to);
                canvas.stroke();
                var numberOfParts = data.numberOfParts;
                var parts = data.parts.pt;
                var colors = data.colors.cs;
                var df = 1.6;
                for(var i = 0; i<numberOfParts; i++)
                {
                    canvas.beginPath();
                    canvas.strokeStyle = colors[i];
                    canvas.arc(this.x, this.y, this.radius, df, df + (Math.PI * 2) * ((parts[i] - 1) / 100));
                    canvas.stroke();
                    df += (Math.PI * 2) * (parts[i] / 100);
                }
            }
        }
        var data = 
            {
                numberOfParts: 4,
                parts:{"pt": [50 , 25 , 25 ]},//percentage of each parts 
                colors:{"cs": ["#FFBA9C", "#8BA4F9", "#6FCF97", "#3D4975"]}//color of each part
            };

				chart.fillStyle="#fff";
        chart.fillRect(0, 0, canvas.width, canvas.height);
        var drawD = new drawDChart(chart);
        drawD.set(150, 150, 100, 0, Math.PI*2, 7, "#fff");
        drawD.draw(data);
