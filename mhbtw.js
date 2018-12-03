var sketchProc=function(processingInstance){ with (processingInstance){
    size(400, 400); 
    frameRate(60);
    
    
    //ProgramCodeGoesHere
    
    angleMode = "radians";
    
    var tMapSize = 25;
    
    var splitPoints = function(p2, points) {
        p2.splice(0, p2.length);
        for (var i = 0; i < points.length - 1; i++) {
            p2.push(new PVector(points[i].x, points[i].y));
            p2.push(new PVector((points[i].x + points[i+1].x)/2, (points[i].y +
                points[i+1].y)/2));
        }  
        p2.push(new PVector(points[i].x, points[i].y));
        p2.push(new PVector((points[0].x + points[i].x)/2, (points[0].y +
            points[i].y)/2));
    };
    
    var average = function(p2, points) {
        for (var i = 0; i < p2.length - 1; i++) {
            var x = (p2[i].x + p2[i+1].x)/2;
            var y = (p2[i].y + p2[i+1].y)/2;
            p2[i].set(x, y);
        } 
        var x = (p2[i].x + points[0].x)/2;
        var y = (p2[i].y + points[0].y)/2;
        points.splice(0, points.length);
        for (i = 0; i < p2.length; i++) {
            points.push(new PVector(p2[i].x, p2[i].y));   
        }    
    };    
    
    var subdivide = function(p2, points) {
        splitPoints(p2, points);
        average(p2, points);
    };
    
    var tilemap = [
        "wwwwwwwwwwwwwwww",
        "w----------ww--w",
        "w--wwwwwww-ww--w",
        "w--wwwwwww-ww--w",
        "w--------------w",
        "w----------wwwww",
        "w--w---ww------w",
        "w--w---ww------w",
        "w--w-wwww--www-w",
        "w--w-wwww--www-w",
        "w--w-------www-w",
        "w--w-----------w",
        "w--w-www--w----w",
        "w--w-www-----w-w",
        "w------------w-w",
        "wwwwwwwwwwwwwwww",];

    var segments = [
        [new PVector(1, 1), new PVector(15, 1)],
        [new PVector(15, 1), new PVector(15, 15)],
        [new PVector(15, 15), new PVector(1, 15)],
        [new PVector(1, 15), new PVector(1, 1)],

        [new PVector(3, 2), new PVector(10, 2)],
        [new PVector(10, 2), new PVector(10, 4)],
        [new PVector(10, 4), new PVector(3, 4)],
        [new PVector(3, 4), new PVector(3, 2)],

        [new PVector(11, 1), new PVector(13, 1)],
        [new PVector(13, 1), new PVector(13, 4)],
        [new PVector(13, 4), new PVector(11, 4)],
        [new PVector(11, 4), new PVector(11, 1)],

        [new PVector(11, 5), new PVector(15, 5)],
        [new PVector(15, 5), new PVector(15, 6)],
        [new PVector(15, 6), new PVector(11, 6)],
        [new PVector(11, 6), new PVector(11, 5)],

        [new PVector(3, 6), new PVector(4, 6)],
        [new PVector(4, 6), new PVector(4, 14)],
        [new PVector(4, 14), new PVector(3, 14)],
        [new PVector(3, 14), new PVector(3, 6)],

        [new PVector(7, 6), new PVector(9, 6)],
        [new PVector(9, 6), new PVector(9, 10)],
        [new PVector(9, 10), new PVector(7, 10)],
        [new PVector(7, 10), new PVector(7, 6)],

        [new PVector(5, 8), new PVector(7, 8)],
        [new PVector(7, 8), new PVector(7, 10)],
        [new PVector(7, 10), new PVector(5, 10)],
        [new PVector(5, 10), new PVector(5, 8)],

        [new PVector(11, 8), new PVector(14, 8)],
        [new PVector(14, 8), new PVector(14, 11)],
        [new PVector(14, 11), new PVector(11, 11)],
        [new PVector(11, 11), new PVector(11, 8)],

        [new PVector(5, 12), new PVector(8, 12)],
        [new PVector(8, 12), new PVector(8, 14)],
        [new PVector(8, 14), new PVector(5, 14)],
        [new PVector(5, 14), new PVector(5, 12)],

        [new PVector(10, 12), new PVector(11, 12)],
        [new PVector(11, 12), new PVector(11, 13)],
        [new PVector(11, 13), new PVector(10, 13)],
        [new PVector(10, 13), new PVector(10, 12)],

        [new PVector(13, 13), new PVector(14, 13)],
        [new PVector(14, 13), new PVector(14, 15)],
        [new PVector(14, 15), new PVector(13, 15)],
        [new PVector(13, 15), new PVector(13, 13)]
    ];

    var uniquePoints = [
        new PVector(1, 1),
        new PVector(15, 1),
        new PVector(15, 15),
        new PVector(1, 15),

        new PVector(3, 2),
        new PVector(10, 2),
        new PVector(10, 4),
        new PVector(3, 4),

        new PVector(11, 1),
        new PVector(13, 1),
        new PVector(13, 4),
        new PVector(11, 4),

        new PVector(11, 5),
        new PVector(15, 5),
        new PVector(15, 6),
        new PVector(11, 6),

        new PVector(3, 6),
        new PVector(4, 6),
        new PVector(4, 14),
        new PVector(3, 14),

        new PVector(7, 6),
        new PVector(9, 6),
        new PVector(9, 10),
        new PVector(7, 10),

        new PVector(5, 8),
        new PVector(7, 8),
        new PVector(7, 10),
        new PVector(5, 10),

        new PVector(11, 8),
        new PVector(14, 8),
        new PVector(14, 11),
        new PVector(11, 11),

        new PVector(5, 12),
        new PVector(8, 12),
        new PVector(8, 14),
        new PVector(5, 14),

        new PVector(10, 12),
        new PVector(11, 12),
        new PVector(11, 13),
        new PVector(10, 13),

        new PVector(13, 13),
        new PVector(14, 13),
        new PVector(14, 15),
        new PVector(13, 15),
    ];    
      
    function getIntersection(ray, segment, sight) {
        var r_px = ray[0].x;
        var r_py = ray[0].y;
        var r_dx = ray[1].x - ray[0].x;
        var r_dy = ray[1].y - ray[0].y;
        var s_px = segment[0].x * tMapSize;
        var s_py = segment[0].y * tMapSize;
        var s_dx = segment[1].x * tMapSize - segment[0].x * tMapSize;
        var s_dy = segment[1].y * tMapSize - segment[0].y * tMapSize;

        var r_mag = sqrt(r_dx*r_dx+r_dy*r_dy);
        var s_mag = sqrt(s_dx*s_dx+s_dy*s_dy);
        if(r_dx/r_mag==s_dx/s_mag && r_dy/r_mag==s_dy/s_mag){
            return null;
        }

        var T2 = (r_dx*(s_py-r_py) + r_dy*(r_px-s_px))/(s_dx*r_dy - s_dy*r_dx);
        var T1 = (s_px+s_dx*T2-r_px)/r_dx;
        
        if (T1 < 0) return null;
        if (T2 < 0 || T2 > 1) return null;
        
        if (T1 > sight) {
            T1 = sight;
        }
        
	    return [new PVector(r_px+r_dx*T1, r_py+r_dy*T1), T1];
    };
        
    var wallObj = function(x , y) {
        this.x = x;
        this.y = y;
    };
    
    var playerObj = function(x, y) {
        this.position = new PVector(x, y);
        this.lastPos = new PVector(x, y);
        this.isNavigating = false;
        this.path = [];
        this.dx = 0;
        this.dy = 0;
        this.width = 13;
        this.height = 22;
        this.speed = 1.3;
        
        this.pointsa = [];
        this.p2a = [];
        this.iterationsa = 0;
        this.pointsa.push(new PVector(0, 0),
                    new PVector(6, 2),
                    new PVector(14, 2),
                    new PVector(19, 0),
                    new PVector(18, 8),
                    new PVector(17, 17),
                    new PVector(10, 19),
                    new PVector(4, 17),
                    new PVector(2, 8));
                    
        this.pointsb = [];
        this.p2b = [];
        this.iterationsb = 0;
        this.pointsb.push(new PVector(0, 6),
                    new PVector(10, 7),
                    new PVector(19, 6),
                    new PVector(15, 13),
                    new PVector(10, 8),
                    new PVector(5, 13));
    };
    
    var guardObj = function(x, y) {
        this.position = new PVector(x, y);
        this.isNavigating = false;
        this.angle = 0;
        this.targetAngle = 0;
        this.fov = PI/2;
        this.sight = 300;
        this.dx = 0;
        this.scale = 1;
        this.timer = 0;
        this.patrolPath = [];
        this.patrolPathIndex = 0;
        this.seesPlayer = false;
        this.playerAngle = new PVector(0, 0);
        this.destination = [];
        
        this.step = new PVector(0, 0);
        this.wanderAngle = random(0, PI);
        this.wanderDist = random(70, 100);
        
        this.pointsa = [];
        this.p2a = [];
        this.iterationsa = 0;
        this.pointsa.push(new PVector(5, 11),
                    new PVector(14, 7),
                    new PVector(21, 11),
                    new PVector(21, 19),
                    new PVector(14, 24),
                    new PVector(6, 19));
                    
        this.pointsb = [];
        this.p2b = [];
        this.iterationsb = 0;
        this.pointsb.push(new PVector(0, 6),
                    new PVector(14, 0),
                    new PVector(24, 6),
                    new PVector(21, 11),
                    new PVector(4, 11));
    };
    
    wallObj.prototype.draw = function() {
        pushMatrix();
        translate(this.x, this.y);
        
        noStroke();
        fill(80, 80, 80);
        rect(0, 0, tMapSize, tMapSize);
        fill(50, 50, 20);
        rect(3, 6, 2, 2);
        rect(4, 23, 2, 2);
        rect(16, 16, 2, 2);
        rect(10, 1, 2, 2);
        rect(23, 6, 2, 2);
        
        popMatrix();
    };
    
    playerObj.prototype.draw = function() {
        pushMatrix();
        translate(this.position.x, this.position.y);

        if (this.dx !== 0) {
            if (this.dx > 0) {
                scale(1, 1, 1);
            }
            if (this.dx < 0) {
                scale(-1, 1, 1);
                translate(-this.width, 0);
            }
            
            fill(0);
            rect(4, 12, 6, 8);
            rect(2, 13, 2, 2);
            rect(1, 14, 2, 2);
            rect(10, 13, 2, 2);
            rect(11, 14, 2, 2);
            fill(90, 90, 90);
            rect(2, 19, 4, 3);
            rect(8, 19, 4, 3);
            fill(239, 228, 176);
            ellipse(7, 7, 9, 10);
            fill(185, 122, 87);
            beginShape();
            vertex(11, 4);
            vertex(9, 2);
            vertex(7, 1);
            vertex(3, 4);
            vertex(3, 8);
            vertex(7, 4);
            endShape();
            fill(0);
            ellipse(9, 7, 1, 1);
        }
        else if (this.dy < 0) {
            fill(90, 90, 90);
            rect(2, 19, 4, 3);
            rect(8, 19, 4, 3);
            fill(0);
            rect(4, 12, 6, 8);
            rect(2, 13, 2, 2);
            rect(1, 14, 2, 2);
            rect(10, 13, 2, 2);
            rect(11, 14, 2, 2);            
            fill(239, 228, 176);
            ellipse(7, 7, 9, 10);
            fill(185, 122, 87);
            beginShape();
            vertex(12, 8);
            vertex(11, 4);
            vertex(9, 2);
            vertex(7, 1);
            vertex(3, 4);
            vertex(3, 8);
            vertex(7, 10);
            endShape();
        }
        else {
            fill(0);
            rect(4, 12, 6, 8);
            rect(2, 13, 2, 2);
            rect(1, 14, 2, 2);
            rect(10, 13, 2, 2);
            rect(11, 14, 2, 2);
            fill(90, 90, 90);
            rect(2, 19, 4, 3);
            rect(8, 19, 4, 3);
            fill(239, 228, 176);
            ellipse(7, 7, 9, 10);
            fill(185, 122, 87);
            beginShape();
            vertex(12, 8);
            vertex(11, 4);
            vertex(9, 2);
            vertex(7, 1);
            vertex(3, 4);
            vertex(3, 8);
            vertex(5, 4);
            vertex(8, 4);
            endShape();
            fill(0);
            ellipse(9, 7, 1, 1);
            ellipse(6, 7, 1, 1);
        }
        
        popMatrix();
    };
    
    guardObj.prototype.draw = function() {
        pushMatrix();
        translate(this.position.x, this.position.y);
        
        if (this.angle !== this.targetAngle) {
            var p = this.targetAngle - this.angle;
            if (p < 0) { p += 2*PI; }
            if (p > PI) {
                if (this.angle === 0) { this.angle = 2*PI - PI/24; }
                else { this.angle -= PI/24; }
            }
            if (p <= PI) { this.angle += PI/24; }
            if (this.angle > 2*PI || this.angle < -2*PI) { this.angle = 0; }
            if (abs(this.angle % (2*PI) - this.targetAngle) < PI/24) {
                this.angle = this.targetAngle;
            }
        }

        popMatrix();

        var uniqueAngles = [];
        for(var i = 0; i < uniquePoints.length; i++) {
            var uniquePoint = uniquePoints[i];            
            if (uniquePoint.x < 1) continue;
            var angle = atan2(uniquePoint.y*tMapSize-(this.position.y + tMapSize/2*this.scale), uniquePoint.x*tMapSize-(this.position.x + tMapSize/2*this.scale));
            if ((angle >= this.angle - this.fov/2 && angle <= this.angle + this.fov/2) ||
                (angle + 2*PI >= this.angle - this.fov/2 && angle + 2*PI <= this.angle + this.fov/2))
                uniqueAngles.push(angle-0.00001, angle, angle+0.00001);
        }     

        var intersects = [];        

        for (var i = 0; i < uniqueAngles.length; i++) {
            var angle = uniqueAngles[i];
            if (this.angle > PI/2 && this.angle < 3*PI/2) {
                if (angle < 0) angle += 2*PI;
            }            

            var dx = cos(angle);
            var dy = sin(angle);

            var ray = [
                new PVector(this.position.x + tMapSize/2*this.scale, this.position.y + tMapSize/2*this.scale),
                new PVector(this.position.x + tMapSize/2*this.scale + dx, this.position.y + tMapSize/2*this.scale + dy)
            ];

            var closestIntersect = null;
            for (var k = 0; k < segments.length; k++) {
                var intersect = getIntersection(ray, segments[k], this.sight/2);
                if (!intersect) continue;
                if (!closestIntersect || intersect[1] < closestIntersect[1]) closestIntersect = intersect;
            }
            closestIntersect.push(angle);
            intersects.push(closestIntersect);
        }

        intersects = intersects.sort(function(a, b) {
            return a[2] - b[2];
        })

        var angle = this.angle - this.fov/2;
        var dx = cos(angle);
        var dy = sin(angle);
        var ray = [
            new PVector(this.position.x + tMapSize/2*this.scale, this.position.y + tMapSize/2*this.scale),
            new PVector(this.position.x + tMapSize/2*this.scale + dx, this.position.y + tMapSize/2*this.scale + dy)
        ];
        var closestIntersect = null;
        for (var k = 0; k < segments.length; k++) {
            var intersect = getIntersection(ray, segments[k], this.sight/2);
            if (!intersect) continue;
            if (!closestIntersect || intersect[1] < closestIntersect[1]) closestIntersect = intersect;
        }
        closestIntersect.push(angle);
        intersects.unshift(closestIntersect);

        var angle = this.angle + this.fov/2;
        var dx = cos(angle);
        var dy = sin(angle);
        var ray = [
            new PVector(this.position.x + tMapSize/2*this.scale, this.position.y + tMapSize/2*this.scale),
            new PVector(this.position.x + tMapSize/2*this.scale + dx, this.position.y + tMapSize/2*this.scale + dy)
        ];
        var closestIntersect = null;
        for (var k = 0; k < segments.length; k++) {
            var intersect = getIntersection(ray, segments[k], this.sight/2);
            if (!intersect) continue;
            if (!closestIntersect || intersect[1] < closestIntersect[1]) closestIntersect = intersect;
        }
        closestIntersect.push(angle);
        intersects.push(closestIntersect);

        fill(255, 255, 0, 50);
        noStroke();
        beginShape();
        vertex(this.position.x + tMapSize/2*this.scale, this.position.y + tMapSize/2*this.scale);
        for (var i = 0; i < intersects.length; i++) {
            if (intersects[i][0].x < 1)
                continue;
            
            vertex(intersects[i][0].x, intersects[i][0].y);
        }
        vertex(this.position.x + tMapSize/2*this.scale, this.position.y + tMapSize/2*this.scale);
        endShape();
    
        pushMatrix();
        translate(this.position.x, this.position.y);

        scale(this.scale);
        
        noStroke();
        fill(230, 184, 128);
        beginShape();
        for (var i = 0; i < this.pointsa.length; i++) {
            vertex(this.pointsa[i].x, this.pointsa[i].y);   
        }
        vertex(this.pointsa[0].x, this.pointsa[0].y);
        endShape();
        
        fill(22, 27, 100);
        beginShape();
        for (var i = 0; i < this.pointsb.length; i++) {
            vertex(this.pointsb[i].x, this.pointsb[i].y);   
        }
        vertex(this.pointsb[0].x, this.pointsb[0].y);
        endShape();
        
        if (this.iterationsa < 5) {
            subdivide(this.p2a, this.pointsa);
            this.iterationsa++;
        }
        if (this.iterationsb < 5) {
            subdivide(this.p2b, this.pointsb);
            this.iterationsb++;
        }
        
        fill(0);
        ellipse(11, 14, 2, 2);
        ellipse(16, 14, 2, 2);
        
        popMatrix();
    };
    
    guardObj.prototype.pace = function() {
        if (this.position.x <= 100) {
            if (this.timer >= 180) {
                this.dx = 1; 
                this.targetAngle = 0;
                this.timer = 0;
            }
            else { 
                this.dx = 0;
                this.timer += 1; 
            }
        }
        if (this.position.x >= 250) { 
            if (this.timer >= 180) {
                this.dx = -1; 
                this.targetAngle = PI;
                this.timer = 0;
            }
            else { 
                this.dx = 0;
                this.timer += 1; 
            }
        }
        
        this.position.x += this.dx;
    };
    
    var nodes = [];
    var walls = [];
    var guards = [];
    var state = 0;
    guards.push(new guardObj(150, 197));
    guards[0].scale = 2;
    guards[0].dx = 1;
    var showInstructions = -1;
    var player = new playerObj(1*tMapSize, 1*tMapSize);

    playerObj.prototype.move = function() {
        this.dx = 0;
        this.dy = 0;        
        if (up) { this.dy -= this.speed; }
        if (down) { this.dy += this.speed; }
        if (left) { this.dx -= this.speed; }
        if (right) { this.dx += this.speed; }
        
        this.lastPos.x = this.position.x;
        this.lastPos.y = this.position.y;
        this.position.x += this.dx;
        this.checkCollision();
        this.lastPos.x = this.position.x;
        this.lastPos.y = this.position.y;
        this.position.y += this.dy;
        this.checkCollision();
    };
    
    var up = false;
    var down = false;
    var left = false;
    var right = false;
    
    keyPressed = function() {
        switch (keyCode) {
            case 37:
                left = true;
                break;
            case 38:
                up = true;
                break;
            case 39:
                right = true;
                break;
            case 40:
                down = true;
                break;
            case 83:
                player.speed += 0.1;
                console.log(player.speed);
                break;
            case 67:
                guards[1].sight -= 30;
                guards[2].sight -= 30;
                guards[1].fov -= PI/12;
                guards[2].fov -= PI/12;
                break;
        }
    };
    
    keyReleased = function() {
        switch (keyCode) {
            case 37:
                left = false;
                break;
            case 38:
                up = false;
                break;
            case 39:
                right = false;
                break;
            case 40:
                down = false;
                break;
        }
    };    
    
    guardObj.prototype.move = function() {
        if (this.isNavigating) {
            if (this.position.x % tMapSize === 0 && this.position.y % tMapSize === 0){
                this.destination = this.path.pop();
                if (this.path.length === 0) { this.isNavigating = false; }
            }
        }
        if (this.destination.x * tMapSize > this.position.x) {
            this.position.x += 1;
            this.targetAngle = 0;
        }
        else if (this.destination.x * tMapSize < this.position.x) {
            this.position.x -= 1;
            this.targetAngle = PI;
        }
        else if (this.destination.y * tMapSize > this.position.y) {
            this.position.y += 1;
            this.targetAngle = PI/2;
        }
        else if (this.destination.y * tMapSize < this.position.y) {
            this.position.y -= 1;
            this.targetAngle = 3*PI/2;
        }
    };
    
    playerObj.prototype.checkCollision = function() {
        var self = this;
        var collide = false;
        var tx = Math.floor(self.position.x / tMapSize);
        var ty = Math.floor(self.position.y / tMapSize);
    
        for (var i = 0; i < walls.length; i++) {
            // Check origin
            if (tx * tMapSize === walls[i].x && ty * tMapSize === walls[i].y) {
                collide = true;
                break;
            }
            var txRight = Math.floor((self.position.x + self.width) / tMapSize);
            if (txRight !== tx) {
                // Check 1 tile to right
                if ((walls.length - i > 1) && (Math.floor(walls[i+1].x / tMapSize) === txRight) && (Math.floor(walls[i+1].y / tMapSize) === ty)) {
                    collide = true;
                    break;
                }
            }
            var tyDown = Math.floor((self.position.y + self.height) / tMapSize);
            if (tyDown !== ty) {
                // Check 1 tile down
                if (tilemap[tyDown].charAt(tx) === 'w') {
                    collide = true;
                }
            }
            if ((txRight !== tx) && (tyDown !== ty)) {
                // Check 1 tile down and to the right
                if (tilemap[tyDown].charAt(txRight) === 'w') {
                    collide = true;
                }
            }
        }
        
        if (collide) {
            self.position.x = self.lastPos.x;
            self.position.y = self.lastPos.y;
        }
    };
    
    var initTilemap = function() {
        for (var i = 0; i < tilemap.length; i++) {
            for (var j = 0; j < tilemap[i].length; j++) {
                switch (tilemap[i][j]) {
                    case 'w':
                        walls.push(new wallObj(j*tMapSize, i*tMapSize));
                        break;
                }
            }
        }
    };
    
    initTilemap();
    
    var Node = function(x, y) {
        this.x = x;
        this.y = y;
        this.id = x.toString().padStart(2, '0').concat(y.toString().padStart(2, '0'));
    };
    
    var initNodes = function() {
        for (var i = 0; i < tilemap.length; i++) {
            for (var j = 0; j < tilemap[i].length; j++) {
                switch (tilemap[i][j]) {
                    case '-':
                        nodes.push(new Node(j, i));
                        break;
                }
            }
        }
    };
    
    initNodes();
    
    var hCostEstimate = function(start, goal) {
        return (Math.abs(goal.x - start.x) + Math.abs(goal.y - start.y));
    };
    
    var findNeighbors = function(node) {
        var neighbors = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].x === node.x && (nodes[i].y === node.y+1 || nodes[i].y === node.y-1)) {
                neighbors.push(nodes[i]);
            }
            if (nodes[i].y === node.y && (nodes[i].x === node.x+1 || nodes[i].x === node.x-1)) {
                neighbors.push(nodes[i]);
            }
        }
        
        return neighbors;
    };
    
    var reconstructPath = function(cameFrom, current) {
        var totalPath = [current];
        while (cameFrom[current.id]) {
            current = cameFrom[current.id];
            totalPath.push(current);
        }
        return totalPath;
    };
    
    var AStar = function(start, goal) {
        var closedSet = [];
        var openSet = [start];
        var cameFrom = {};
        var gScore = {};
        gScore[start.id] = 0;
        var fScore = {};
        fScore[start.id] = hCostEstimate(start, goal);
        
        while (openSet.length > 0) {
            var current = openSet[0];
            var curIndex = 0;
            for (var i = 1; i < openSet.length; i++) {
                if (fScore[openSet[i].id] < fScore[current.id]) {
                    current = openSet[i];
                    curIndex = i;
                }
            }
            if (current.x === goal.x && current.y === goal.y) {
                return reconstructPath(cameFrom, current);
            }
            
            var removed = openSet.splice(curIndex, 1);
            closedSet.push(current);
            
            var neighbors = findNeighbors(current);
            for (var i = 0; i < neighbors.length; i++) {
                // If neighbors[i] is in closedSet, it has already been evaluated
                var evaluated = false;
                for (var j = 0; j < closedSet.length; j++) {
                    if (neighbors[i].x === closedSet[j].x && neighbors[i].y === closedSet[j].y){
                        evaluated = true;
                    }
                }
                if (evaluated) { continue; }
                
                var tentativeGScore = gScore[current.id] + 1;
                
                var neighborInOpenSet = false;
                for (var j = 0; j < openSet.length; j++) {
                    if (neighbors[i].x === openSet[j].x && neighbors[i].y === openSet[j].y) {
                        neighborInOpenSet = true;
                    }
                }
                if (!neighborInOpenSet) { openSet.push(neighbors[i]); }
                else if (tentativeGScore >= gScore[neighbors[i].id]) { continue; }
                
                cameFrom[neighbors[i].id] = current;
                gScore[neighbors[i].id] = tentativeGScore;
                fScore[neighbors[i].id] = gScore[neighbors[i].id] + hCostEstimate(neighbors[i], goal);
            }
        }
    };
    
    guardObj.prototype.patrol = function() {
        if (this.isNavigating) { return; }
        if (this.timer > 0 && this.timer < 180) {
            this.timer++;
            return;
        }
        if (this.timer === 180) { this.timer = 0; }
        var n1, n2;
        if (this.patrolPathIndex === 0) {
            n1 = this.patrolPath[this.patrolPath.length - 1];
            n2 = this.patrolPath[this.patrolPathIndex];
        }
        else {
            n1 = this.patrolPath[this.patrolPathIndex - 1];
            n2 = this.patrolPath[this.patrolPathIndex];
        }
        this.path = AStar(n1, n2);
        this.path.pop();
        if (this.path.length > 0) { this.isNavigating = true; }
        
        this.patrolPathIndex++;
        if (this.patrolPathIndex === this.patrolPath.length) {
            this.patrolPathIndex = 0;
        }
        
        this.timer++;
    };

    guardObj.prototype.checkPlayer = function() {
        this.playerAngle.set(player.position.x + player.width/2 - this.position.x,
            player.position.y + player.width/2 - this.position.y);
        var playerAngle = this.playerAngle.heading();
        if (playerAngle < 0) { playerAngle += 2*PI; }
        var playerDistance = dist(this.position.x, this.position.y, 
            player.position.x + player.width/2, player.position.y + player.width/2);
        if ((playerAngle >= this.angle - this.fov/2 && playerAngle <= this.angle + this.fov/2) && playerDistance <= this.sight / 2) {
            // Check for collision
            var x = player.position.x + player.width/2 + 1;
            var y = player.position.y + player.width/2 + 8;
            if (get(x, y) > -15000000) {
                this.seesPlayer = true;
            }            
        }
        else { this.seesPlayer = false; }
    }
    
    var initLevel = function() {
        guards.push(new guardObj(4*tMapSize, 11*tMapSize));
        guards[1].patrolPath.push(new Node(2, 13));
        guards[1].patrolPath.push(new Node(9, 13));
        guards[1].patrolPath.push(new Node(6, 10));
        guards.push(new guardObj(6*tMapSize, 4*tMapSize));
        guards[2].patrolPath.push(new Node(6, 4));
        guards[2].patrolPath.push(new Node(12, 4));
        guards[2].patrolPath.push(new Node(9, 8));
        
        state = 1;
    };
    
    var mouseClicked = function() {
        if (state === 0) { // Start screen
            if (mouseX >= 95 && mouseX <= 205 && mouseY >=350 && mouseY <= 380) {
                showInstructions *= -1;
            }
            if (mouseX >= 250 && mouseX <= 305 && mouseY >=350 && mouseY <= 380) {
                initLevel();
            }
        }
        else if (state === 1 ) {
    
        }
    };
    
    var titleOffset = 0;
    var colorCycle = 0;
    
    var draw = function() {
        if (state === 0) { // Start screen
            var color = 60 + 15 * sin(colorCycle);
            background(color, color, 80);
            noStroke();
            fill(20, 80, 133);
            rect(0, 0, 400, 115);
            rect(0, 325, 400, 75);
        
            fill(255, 139, 23);
            textSize(33);
            var titleY = 4 * sin(titleOffset);
            var subTitleY = 4 * sin(titleOffset + PI/2);
            text("Must Have Been the Wind", 9, 50 + titleY);
            fill(255, 202, 143);
            textSize(20);
            text("A game by Jason Britton", 90, 90 + subTitleY);
            titleOffset += PI/72;
            if (titleOffset >= 2*PI) { titleOffset = 0; }
            colorCycle += PI/150;
            if (colorCycle >= 2*PI) { colorCycle = 0; }
            
            stroke(0);
            strokeWeight(8);
            line(0, 115, 400, 115);
            line(0, 325, 400, 325);
            
            for (var i = 0; i < guards.length; i++) {
                guards[i].draw();
                guards[i].pace();
                fill(255, 0, 0);
            }

            fill(150, 150, 173);
            strokeWeight(4);
            stroke(164, 4, 222);
            rect(95, 350, 110, 30);
            rect(250, 350, 55, 30);
            fill(0);
            text("Instructions", 100, 372);
            text("Start", 255, 372);
            
            if (showInstructions > 0) {
                stroke(57, 58, 74);
                strokeWeight(10);
                fill(188, 189, 203);
                rect(50, 75, 300, 250);
                fill(0);
                textSize(17);
                text("Your goal is to get to the green objective undetected. Control your character with the arrow keys. Guards will patrol the area. Don't let them see you!", 70, 90, 250, 230);
                // text("Your goal is to get to your objective, steal the item, and get out undetected. Control your character with the arrow keys. Guards will patrol the area. If you are visible in their field of view, their suspicion will start to rise. Let it get too high and they will chase you down, alerting other guards in the process.", 70, 90, 250, 230);
            }
        }
        else if (state === 1) { // Level
            background(50, 50, 70);
            for (var i = 0; i < walls.length; i++) { walls[i].draw(); }
            fill(0, 180, 230);
            beginShape();
            vertex(363, 375);
            vertex(350, 357);
            vertex(355, 350);
            vertex(370, 350);
            vertex(375, 357);
            endShape();

            player.move();
            player.draw();

            for (var i = 1; i < guards.length; i++) {
                guards[i].draw();
                guards[i].checkPlayer();
                if (guards[i].seesPlayer) { state = 2; }
                guards[i].patrol();
                guards[i].move();
                fill(255, 0, 0);
            }            
            
            if (player.position.x > 350 && player.position.y > 350) { state = 3; }
            
            fill(255, 0, 0);
            text(Math.floor(mouseX/tMapSize), 50, 310);
            text(Math.floor(mouseY/tMapSize), 50, 330);
        }
        else if (state === 2) {
            fill(220, 0, 0);
            textSize(46);
            text("Caught!", 130, 200);
        }
        else if (state === 3) {
            fill(0, 200, 0);
            textSize(46);
            text("Good job!", 120, 200);
        }
    };    
    
    }};
    