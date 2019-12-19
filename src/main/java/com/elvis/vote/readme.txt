时间规范（统一取出来的时间转化成此模式）
 Date aa = new Timestamp(vote_time.getTime());
 SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
 String date  =   df.format(aa);
 return date;

存入数据库的时间转换方法
Date date = new Date();
Timestamp t= new Timestamp(date.getTime());
